import { IconScale } from '@tabler/icons-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-6 flex max-w-7xl flex-col items-center justify-between gap-8 border-t border-slate-200 px-6 py-24 md:flex-row">
      <div className="font-display flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="bg-royal-green h-2 w-2 rounded-full shadow-[0_0_10px_rgba(10,61,46,0.3)]" />
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Vault Secure Pulse
          </span>
        </div>
        <div className="h-4 w-px bg-slate-200" />
        <div className="flex items-center gap-3">
          <IconScale className="text-royal-green h-4 w-4" />
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Standard Audited Ledger
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 text-right">
        <p className="font-display text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase">
          © {currentYear} Gold Vault Infrastructure
        </p>
      </div>
    </footer>
  );
};
