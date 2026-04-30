import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { HeroAnalyticsModalProps } from '@/types/hero';
import { IconTrendingUp, IconX } from '@tabler/icons-react';
import { motion } from 'motion/react';
import type { FC } from 'react';

export const HeroAnalyticsModal: FC<HeroAnalyticsModalProps> = (props) => {
  const { totalWeight, sellerSummary } = props;

  return (
    <Dialog>
      <DialogTrigger className="font-display hover:text-royal-green hover:border-royal-green/30 hover:bg-royal-green/5 mt-8 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold tracking-widest text-slate-500 uppercase transition-all">
        Analyze Metrics
        <IconTrendingUp className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="border-gold/10 w-full max-w-xl rounded-[4rem] border bg-white p-16 shadow-2xl"
      >
        <DialogHeader className="mb-16 flex-row items-center justify-between">
          <div>
            <DialogTitle className="font-display text-3xl font-black tracking-tight text-slate-950">
              Market Split
            </DialogTitle>
            <DialogDescription className="font-display text-gold mt-2 text-sm font-bold tracking-[0.2em] uppercase">
              Distribution Matrix
            </DialogDescription>
          </div>
          <DialogClose className="hover:bg-gold/5 hover:text-gold rounded-full border border-slate-100 bg-slate-50 p-4 text-slate-400">
            <IconX className="h-6 w-6" />
          </DialogClose>
        </DialogHeader>

        <div className="custom-scroll max-h-[50vh] space-y-12 overflow-y-auto pr-8">
          {(Object.entries(sellerSummary) as [string, number][])
            .sort((a, b) => b[1] - a[1])
            .map(([name, weight]) => (
              <div key={name} className="group">
                <div className="mb-4 flex items-end justify-between">
                  <span className="font-display truncate pr-4 text-lg font-semibold tracking-widest text-slate-950 capitalize">
                    {name}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-gold text-2xl font-bold tabular-nums">
                      {weight.toFixed(1)}
                    </span>
                    <span className="font-display text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                      G
                    </span>
                  </div>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full border border-slate-100 bg-slate-50 p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((weight as number) / (totalWeight || 1)) * 100}%`,
                    }}
                    className="bg-gold h-full rounded-full"
                  />
                </div>
                <div className="mt-3 flex justify-between px-1">
                  <span className="font-display text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    Inventory Contribution
                  </span>
                  <span className="font-display text-gold-muted text-[10px] font-black">
                    {(((weight as number) / (totalWeight || 1)) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
