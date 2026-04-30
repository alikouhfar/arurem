import type { PurchaseWeightProps } from '@/types/purchase';
import type { FC } from 'react';

export const PurchaseWeight: FC<PurchaseWeightProps> = (props) => {
  const { weight, purity } = props;

  return (
    <div className="flex items-end gap-3">
      <span className="font-display text-gold-muted text-5xl leading-none font-black tracking-tighter tabular-nums">
        {weight.toFixed(1)}
      </span>
      <div className="mb-1 flex flex-col items-start gap-1">
        <span className="bg-royal-green font-display text-gold-bright shadow-royal-green/10 w-full rounded-full px-1.5 py-0.5 text-center text-[10px] font-extrabold tracking-[2px] shadow-sm">
          {purity}
        </span>
        <span className="font-display text-xs leading-none font-bold tracking-widest text-slate-400 uppercase">
          Grams
        </span>
      </div>
    </div>
  );
};
