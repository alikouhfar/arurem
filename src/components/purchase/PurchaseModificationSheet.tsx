import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import type { PurchaseModificationSheetProps } from '@/types/purchase';
import { IconX } from '@tabler/icons-react';
import type { FC } from 'react';
import { PurchaseModificationForm } from './PurchaseModificationForm';

export const PurchaseModificationSheet: FC<PurchaseModificationSheetProps> = (props) => {
  const { mode, children } = props;
  const onSubmit = mode === 'create' ? props.onCreate : props.onEdit;

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="w-full max-w-lg! p-12" showCloseButton={false}>
        <SheetHeader className="mb-16 flex-row items-center justify-between">
          <div>
            <SheetTitle className="font-display text-3xl font-black tracking-tight text-slate-950">
              {mode === 'edit' ? 'Modify Asset' : 'Record Asset'}
            </SheetTitle>
            <SheetDescription className="font-display text-royal-green-light mt-2 text-sm font-bold tracking-widest uppercase">
              {mode === 'edit' ? 'Secure Protocol Update' : 'New Security Entry'}
            </SheetDescription>
          </div>

          <SheetClose className="hover:bg-gold/5 hover:text-gold rounded-2xl border border-slate-100 bg-slate-50 p-4 text-slate-400 transition-colors">
            <IconX className="h-6 w-6" />
          </SheetClose>
        </SheetHeader>

        <PurchaseModificationForm
          mode={mode}
          onSubmit={onSubmit}
          selectedPurchase={mode === 'edit' ? props.selectedPurchase : null}
        />
      </SheetContent>
    </Sheet>
  );
};
