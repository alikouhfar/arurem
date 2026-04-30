import type { HeaderProps } from '@/types/header';
import { IconCoins, IconDownload, IconPlus, IconUpload } from '@tabler/icons-react';
import { useRef, type FC } from 'react';
import toast from 'react-hot-toast';
import { CustomToast } from './CustomToast';
import { PurchaseModificationSheet } from './purchase/PurchaseModificationSheet';

export const Header: FC<HeaderProps> = (props) => {
  const { appData, onCreate, onDataChange, onSelectedPurchaseChange } = props;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const exportData = () => {
    const dataStr = JSON.stringify(appData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'aureum_backup.json';

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();

    toast.custom(() => <CustomToast type="success" message="Data exported" />);
  };

  const importData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const jsonData = JSON.parse(event.target?.result as string);
        if (jsonData.purchases && Array.isArray(jsonData.purchases)) {
          onDataChange(jsonData.purchases);
          toast.custom(() => <CustomToast type="success" message="Data imported successfully" />);
        } else {
          toast.custom(() => <CustomToast type="error" message="Invalid backup file" />);
        }
      } catch (err) {
        toast.custom(() => <CustomToast type="error" message="Failed to read file" />);
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <header className="mb-16 flex flex-col items-start justify-between gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50 md:flex-row md:items-center">
      <div className="flex items-center gap-6">
        <div className="bg-royal-green text-gold-bright shadow-gold/20 border-gold/30 flex h-14 w-14 items-center justify-center rounded-2xl border shadow-xl">
          <IconCoins className="h-7 w-7" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-950">
            Gold Vault
          </h1>
          <div className="mt-1 flex items-center gap-2">
            <span className="bg-gold border-gold-bright/30 h-2.5 w-2.5 animate-pulse rounded-full border-2" />
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Inventory Status: <span className="text-royal-green-light font-bold">Secure</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <PurchaseModificationSheet mode="create" onCreate={onCreate}>
          <button
            onClick={() => onSelectedPurchaseChange(null)}
            className="bg-royal-green text-gold-bright font-display shadow-gold/10 border-gold/20 hover:bg-royal-green-light flex cursor-pointer items-center gap-2 rounded-xl border px-6 py-3 text-sm font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-95"
            id="top-add-btn"
          >
            <IconPlus className="h-5 w-5" />
            New Entry
          </button>
        </PurchaseModificationSheet>

        <div className="flex rounded-xl border border-slate-200 bg-slate-50 p-1">
          <button
            onClick={exportData}
            className="hover:text-royal-green cursor-pointer rounded-lg p-2.5 text-slate-500 transition-all hover:bg-white hover:shadow-sm"
            title="Export Data"
          >
            <IconDownload className="h-5 w-5" />
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="hover:text-royal-green cursor-pointer rounded-lg p-2.5 text-slate-500 transition-all hover:bg-white hover:shadow-sm"
            title="Import Data"
          >
            <IconUpload className="h-5 w-5" />
            <input
              type="file"
              ref={fileInputRef}
              onChange={importData}
              className="hidden"
              accept=".json"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
