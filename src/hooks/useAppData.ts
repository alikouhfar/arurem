import { useEffect, useMemo, useState } from 'react';
import type { Purchase } from '../types/purchase';

const STORAGE_KEY = 'aureum_gold_tracker_data';

export type UseAppDataParams = {
  searchQuery: string;
};

export const useAppData = (params: UseAppDataParams) => {
  const { searchQuery } = params;

  const [appData, setAppData] = useState<Purchase[]>(() => {
    const existingData = localStorage.getItem(STORAGE_KEY);
    if (!existingData) return [];
    const parsed = JSON.parse(existingData);
    return parsed.purchases ?? [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ purchases: appData }));
  }, [appData]);

  const filteredPurchases = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return appData.filter(
      (p) =>
        p.sellerName.toLowerCase().includes(query) ||
        p.note?.toLowerCase().includes(query) ||
        p.purity.toLowerCase().includes(query),
    );
  }, [appData, searchQuery]);

  const purchaseStats = useMemo(() => {
    const totalWeight = appData.reduce((acc, p) => acc + p.weight, 0);
    const uniqueSellers = new Set(appData.map((p) => p.sellerName)).size;

    const sellerSummary = appData.reduce<Record<string, number>>((acc, p) => {
      acc[p.sellerName] ??= 0;
      acc[p.sellerName] += p.weight;
      return acc;
    }, {});

    return { totalWeight, uniqueSellers, sellerSummary };
  }, [appData]);

  return { appData, purchaseStats, filteredPurchases, setAppData };
};
