import type { PurchaseListViewSelectorProps } from '@/types/purchase';
import { IconLayoutGrid, IconList } from '@tabler/icons-react';
import type { FC } from 'react';

export const PurchaseListViewSelector: FC<PurchaseListViewSelectorProps> = (props) => {
  const { viewMode, onViewModeChange } = props;

  return (
    <div className="flex items-center self-stretch rounded-[1.25rem] border border-slate-200 bg-white p-1.5 shadow-sm shadow-slate-200/50 sm:self-auto">
      <button
        onClick={() => onViewModeChange('grid')}
        className={`font-display flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all ${viewMode === 'grid' ? 'bg-royal-green text-gold-bright shadow-royal-green/10 shadow-lg' : 'cursor-pointer text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}
        id="grid-view-btn"
      >
        <IconLayoutGrid className="h-5 w-5" />
        Grid
      </button>
      <button
        onClick={() => onViewModeChange('list')}
        className={`font-display flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all ${viewMode === 'list' ? 'bg-royal-green text-gold-bright shadow-royal-green/10 shadow-lg' : 'cursor-pointer text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}
        id="list-view-btn"
      >
        <IconList className="h-5 w-5" />
        List
      </button>
    </div>
  );
};
