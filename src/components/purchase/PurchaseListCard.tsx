import type { PurchaseListCardProps } from '@/types/purchase';
import { IconBuilding, IconCalendar, IconHistory } from '@tabler/icons-react';
import { motion } from 'motion/react';
import type { FC } from 'react';
import { PurchaseCardActions } from './PurchaseCardActions';
import { PurchaseWeight } from './PurchaseWeight';

export const PurchaseListCard: FC<PurchaseListCardProps> = (props) => {
  const { purchase, selectedPurchase, onEdit, onDelete, onSelectedPurchaseChange } = props;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="group hover:shadow-gold/5 hover:border-gold/30 relative flex flex-col justify-between gap-8 rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-xl sm:flex-row sm:items-center"
    >
      <div className="flex min-w-0 flex-1 items-center gap-10">
        <div className="bg-gold/5 border-gold/10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border">
          <IconBuilding className="text-gold h-6 w-6" />
        </div>
        <div className="flex-1">
          <h4 className="font-display truncate text-xl font-extrabold tracking-tight text-slate-950">
            {purchase.sellerName}
          </h4>

          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="font-display flex items-center gap-1.5 text-xs font-bold text-slate-400">
              <IconCalendar className="h-3.5 w-3.5" />
              {new Date(purchase.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
              })}
            </div>
            {purchase.updatedAt && (
              <div className="font-display flex items-center gap-1.5 text-xs font-bold text-slate-400">
                <IconHistory className="h-3.5 w-3.5" />
                {new Date(purchase.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit',
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-8">
        <div className="flex items-baseline gap-3">
          <PurchaseWeight weight={purchase.weight} purity={purchase.purity} />
        </div>

        <div className="flex items-center gap-1 border-l border-slate-100 pl-4">
          <PurchaseCardActions
            onEdit={onEdit}
            onDelete={onDelete}
            purchase={purchase}
            selectedPurchase={selectedPurchase}
            onSelectedPurchaseChange={onSelectedPurchaseChange}
          />
        </div>
      </div>
    </motion.div>
  );
};
