import type { HomeProps } from '@/types/hero';
import { IconShieldCheck, IconSparkles } from '@tabler/icons-react';
import { motion } from 'motion/react';
import { Fragment, type FC } from 'react';
import { HeroAnalyticsModal } from './HeroAnalyticsModal';

export const Hero: FC<HomeProps> = (props) => {
  const { totalWeight, uniqueSellers, sellerSummary } = props;

  return (
    <Fragment>
      <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="bg-royal-green group border-gold/20 relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border p-10 md:col-span-2">
          <div className="bg-gold/20 group-hover:bg-gold/30 absolute top-0 right-0 h-48 w-48 blur-[80px] transition-all duration-700" />

          <div className="mb-8 flex items-center gap-3 text-slate-400">
            <div className="bg-gold/10 border-gold/20 flex h-8 w-8 items-center justify-center rounded-full border">
              <IconShieldCheck className="text-gold-bright h-4 w-4" />
            </div>
            <span className="font-display text-gold-bright/60 flex-1 text-xs font-bold tracking-[0.2em] uppercase">
              Aggregate Inventory Weight
            </span>
          </div>
          <div className="flex items-baseline gap-4">
            <h2 className="font-display text-6xl leading-none font-bold tracking-tighter text-white tabular-nums xl:text-8xl">
              {totalWeight.toFixed(3)}
            </h2>
            <span className="font-display text-gold-bright bg-gold/10 border-gold/20 rounded-lg border px-3 py-1 text-sm font-bold tracking-widest uppercase xl:text-xl">
              Grams
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm shadow-slate-200/50">
          <div>
            <div className="mb-8 flex items-center gap-3 text-slate-400">
              <div className="bg-gold/5 border-gold/10 flex h-8 w-8 items-center justify-center rounded-full border">
                <IconSparkles className="text-gold h-4 w-4" />
              </div>
              <span className="font-display text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                Inventory Split
              </span>
            </div>
            <div className="space-y-6">
              {(Object.entries(sellerSummary) as [string, number][])
                .slice(0, 2)
                .map(([name, weight]) => (
                  <div key={name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-display truncate pr-4 text-sm font-medium text-slate-700 capitalize">
                        {name}
                      </span>
                      <span className="text-royal-green font-mono text-xs font-bold">
                        {((weight / (totalWeight || 1)) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(weight / (totalWeight || 1)) * 100}%` }}
                        className="bg-royal-green h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <HeroAnalyticsModal totalWeight={totalWeight} sellerSummary={sellerSummary} />
        </div>

        <div className="flex items-center justify-center rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm shadow-slate-200/50">
          <div className="flex flex-col items-center gap-4">
            <span className="font-display text-gold text-7xl font-extrabold tracking-tight">
              {uniqueSellers}
            </span>
            <span className="font-display mb-2 text-sm font-extrabold tracking-widest text-slate-700 uppercase">
              Trusted Entities
            </span>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
