import type { PurchaseGridCardProps } from '@/types/purchase';
import { IconCalendar, IconHistory, IconQuote } from '@tabler/icons-react';
import { motion } from 'motion/react';
import type { FC } from 'react';
import { PurchaseCardActions } from './PurchaseCardActions';
import { PurchaseWeight } from './PurchaseWeight';

export const PurchaseGridCard: FC<PurchaseGridCardProps> = (props) => {
  const { purchase, selectedPurchase, onEdit, onDelete, onSelectedPurchaseChange } = props;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="group hover:shadow-gold/5 hover:border-gold/30 relative flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-xl"
    >
      <div className="mb-8 min-w-0 flex-1 text-center sm:text-left">
        <div className="flex-1">
          <h4 className="font-display truncate text-2xl font-extrabold tracking-tight text-slate-950">
            {purchase.sellerName}
          </h4>

          <div className="'justify-center sm:justify-start' mt-2 flex flex-wrap items-center gap-x-6 gap-y-2">
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

          {purchase.note && (
            <div className="mt-6 flex items-start gap-4">
              <IconQuote className="text-gold/20 mt-1 h-5 w-5 shrink-0" />
              <p className="line-clamp-3 text-sm leading-relaxed font-medium text-slate-500">
                {purchase.note}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="absolute top-6 right-6 flex items-center gap-1">
        <PurchaseCardActions
          onEdit={onEdit}
          onDelete={onDelete}
          purchase={purchase}
          selectedPurchase={selectedPurchase}
          onSelectedPurchaseChange={onSelectedPurchaseChange}
        />
      </div>

      <div className="mt-auto flex items-center justify-end gap-8 border-t border-slate-100 pt-8">
        <PurchaseWeight weight={purchase.weight} purity={purchase.purity} />
      </div>
    </motion.div>
  );
};
