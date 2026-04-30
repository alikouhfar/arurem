import type { Purchase } from './purchase';

export type HeaderProps = {
  appData: Array<Purchase>;
  onCreate: (purchase: Purchase) => void;
  onDataChange: (data: Array<Purchase>) => void;
  onSelectedPurchaseChange: (purchase: Purchase | null) => void;
};
