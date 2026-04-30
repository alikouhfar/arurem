import type { PropsWithChildren } from 'react';
import type { ViewMode } from './viewMode';

export type Purchase = {
  id: string;
  sellerName: string;
  weight: number;
  purity: string;
  note?: string;
  createdAt: Date;
  updatedAt?: Date;
};

export type PurchaseWeightProps = {
  weight: number;
  purity: string;
};

export type PurchaseListProps = {
  viewMode: ViewMode;
  purchases: Array<Purchase>;
  selectedPurchase: Purchase | null;
  onDelete: (id: string) => void;
  onEdit: (purchase: Purchase) => void;
  onSelectedPurchaseChange: (purchase: Purchase) => void;
};

export type PurchaseGridCardProps = {
  purchase: Purchase;
  selectedPurchase: Purchase | null;
  onDelete: (id: string) => void;
  onEdit: (purchase: Purchase) => void;
  onSelectedPurchaseChange: (purchase: Purchase) => void;
};

export type PurchaseCardActionsProps = {
  purchase: Purchase;
  selectedPurchase: Purchase | null;
  onDelete: (id: string) => void;
  onEdit: (purchase: Purchase) => void;
  onSelectedPurchaseChange: (purchase: Purchase) => void;
};

export type PurchaseListCardProps = {
  purchase: Purchase;
  selectedPurchase: Purchase | null;
  onDelete: (id: string) => void;
  onEdit: (purchase: Purchase) => void;
  onSelectedPurchaseChange: (purchase: Purchase) => void;
};

export type PurchaseListViewSelectorProps = {
  viewMode: ViewMode;
  onViewModeChange: (viewMode: ViewMode) => void;
};

export type PurchaseModificationFormProps = {
  mode: 'create' | 'edit';
  selectedPurchase: Purchase | null;
  onSubmit: (data: Purchase) => void;
};

export type PurchaseCreateSheetProps = {
  mode: 'create';
  onCreate: (purchase: Purchase) => void;
};

export type PurchaseEditSheetProps = {
  mode: 'edit';
  selectedPurchase: Purchase | null;
  onEdit: (purchase: Purchase) => void;
};

export type PurchaseModificationSheetProps = PropsWithChildren &
  (PurchaseCreateSheetProps | PurchaseEditSheetProps);
