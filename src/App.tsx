import { BackgroundDecorativeElements } from '@/components/BackgroundDecorativeElements';
import { CustomToast } from '@/components/CustomToast';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PurchaseList } from '@/components/purchase/PurchaseList';
import { PurchaseListViewSelector } from '@/components/purchase/PurchaseListViewSelector';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group';
import { useAppData } from '@/hooks/useAppData';
import type { Purchase } from '@/types/purchase';
import type { ViewMode } from '@/types/viewMode';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [selectedPurchase, setSelectedPurchase] = useState<Purchase | null>(null);
  const { appData, purchaseStats, filteredPurchases, setAppData } = useAppData({ searchQuery });

  const onDataChange = (purchases: Array<Purchase>) => setAppData(purchases);
  const onViewModaChange = (viewMode: ViewMode) => setViewMode(viewMode);
  const onSelectedPurchaseChange = (purchase: Purchase | null) => {
    setSelectedPurchase(purchase);
  };

  const onCreate = (purchase: Purchase) => {
    setAppData((previousData) => [purchase, ...previousData]);
  };

  const onDelete = (id: string) => {
    setAppData((previousData) => previousData.filter((p) => p.id !== id));
    toast.custom(() => <CustomToast type="success" message="Entry removed successfully" />);
  };

  const onEdit = (purchase: Purchase) => {
    if (selectedPurchase) {
      setAppData((previousData) =>
        previousData.map((previousPurchase) =>
          previousPurchase.id === selectedPurchase.id
            ? { ...previousPurchase, ...purchase, updatedAt: new Date() }
            : previousPurchase,
        ),
      );
      setSelectedPurchase(null);
    }
  };

  return (
    <div className="selection:bg-gold/20 selection:text-royal-green min-h-screen bg-slate-50 font-sans text-slate-900">
      <BackgroundDecorativeElements />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 xl:px-0">
        <Header
          appData={appData}
          onCreate={onCreate}
          onDataChange={onDataChange}
          onSelectedPurchaseChange={onSelectedPurchaseChange}
        />
        <Hero
          totalWeight={purchaseStats.totalWeight}
          uniqueSellers={purchaseStats.uniqueSellers}
          sellerSummary={purchaseStats.sellerSummary}
        />

        <div className="mb-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <InputGroup className="h-14.5 rounded-[1.25rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/50">
            <InputGroupInput
              type="text"
              placeholder="Filter by vendor, material, or memo..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="focus:border-gold/50 focus:ring-gold/5 ml-1 w-full text-base font-medium transition-all placeholder:text-slate-300 focus:ring-4 focus:outline-none"
            />
            <InputGroupAddon className="ml-1">
              <IconSearch className="size-5 text-slate-300" />
            </InputGroupAddon>
          </InputGroup>

          <PurchaseListViewSelector viewMode={viewMode} onViewModeChange={onViewModaChange} />
        </div>

        <PurchaseList
          onEdit={onEdit}
          onDelete={onDelete}
          viewMode={viewMode}
          purchases={filteredPurchases}
          selectedPurchase={selectedPurchase}
          onSelectedPurchaseChange={onSelectedPurchaseChange}
        />
      </div>

      <Footer />
    </div>
  );
};
