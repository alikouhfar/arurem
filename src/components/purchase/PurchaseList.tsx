import type { PurchaseListProps } from '@/types/purchase';
import { IconShieldCheck } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'motion/react';
import type { FC } from 'react';
import { PurchaseGridCard } from './PurchaseGridCard';
import { PurchaseListCard } from './PurchaseListCard';

export const PurchaseList: FC<PurchaseListProps> = (props) => {
  const { viewMode, purchases, selectedPurchase, onDelete, onEdit, onSelectedPurchaseChange } =
    props;

  return (
    <AnimatePresence mode="popLayout">
      {purchases.length > 0 ? (
        <motion.div
          layout
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'
              : 'space-y-4'
          }
        >
          {purchases.map((purchase) =>
            viewMode === 'grid' ? (
              <PurchaseGridCard
                key={purchase.id}
                purchase={purchase}
                selectedPurchase={selectedPurchase}
                onEdit={onEdit}
                onDelete={onDelete}
                onSelectedPurchaseChange={onSelectedPurchaseChange}
              />
            ) : (
              <PurchaseListCard
                key={purchase.id}
                purchase={purchase}
                selectedPurchase={selectedPurchase}
                onEdit={onEdit}
                onDelete={onDelete}
                onSelectedPurchaseChange={onSelectedPurchaseChange}
              />
            ),
          )}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-[3rem] border-2 border-dashed border-slate-200 bg-white py-40 text-center"
        >
          <div className="bg-gold/5 border-gold/10 mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full border">
            <IconShieldCheck className="text-gold-muted/30 h-10 w-10" />
          </div>
          <h3 className="font-display mb-4 text-2xl font-extrabold tracking-tight text-slate-900">
            Access Empty Sector
          </h3>
          <p className="font-display mx-auto max-w-sm text-lg font-medium text-slate-400">
            No physical entries detected in this vault partition. Start recording your assets.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
