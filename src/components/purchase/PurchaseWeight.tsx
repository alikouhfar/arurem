import type { PurchaseWeightProps } from '@/types/purchase';
import type { FC } from 'react';

export const PurchaseWeight: FC<PurchaseWeightProps> = (props) => {
  const { weight, purity } = props;

  return (
    <div className="flex items-end gap-3">
      <span className="font-display text-gold-muted text-4xl leading-none font-black tracking-tighter tabular-nums lg:text-5xl">
        {weight.toFixed(3)}
      </span>
      <div className="mb-1 flex flex-col items-start gap-1">
        <span className="bg-royal-green font-display text-gold-bright shadow-royal-green/10 w-full rounded-full px-1.5 py-0.5 text-center text-[8px] font-extrabold tracking-[2px] shadow-sm xl:text-[10px]">
          {purity}
        </span>
        <span className="font-display text-[10px] leading-none font-bold tracking-widest text-slate-400 uppercase xl:text-xs">
          Grams
        </span>
      </div>
    </div>
  );
};
