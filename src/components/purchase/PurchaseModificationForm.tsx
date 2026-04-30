import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SheetClose } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';
import type { PurchaseModificationFormProps } from '@/types/purchase';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import type { FC } from 'react';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const purchaseSchema = z.object({
  id: z.string(),
  sellerName: z.string().min(1),
  weight: z.number().positive(),
  purity: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  note: z.string().optional(),
});

type PurchaseFormValues = z.infer<typeof purchaseSchema>;

export const PurchaseModificationForm: FC<PurchaseModificationFormProps> = (props) => {
  const { mode, selectedPurchase, onSubmit } = props;

  const form = useForm<PurchaseFormValues>({
    resolver: zodResolver(purchaseSchema),
    defaultValues: {
      id: crypto.randomUUID(),
      note: '',
      purity: '18K',
      sellerName: '',
      weight: undefined,
      createdAt: new Date(),
    },
  });

  const { handleSubmit, reset, control } = form;

  useEffect(() => {
    if (mode === 'edit' && selectedPurchase) {
      reset({ ...selectedPurchase, createdAt: new Date(selectedPurchase.createdAt) });
    }
  }, [mode, selectedPurchase, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col gap-6 overflow-y-auto">
      <div>
        <label className="font-display px-1 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
          Source Entity
        </label>
        <Controller
          name="sellerName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="E.g. Royal Treasury or Personal Vault"
              className="focus:border-gold/50 focus:ring-gold/5 h-15.5! w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 text-base font-semibold text-slate-950 shadow-inner transition-all placeholder:text-slate-300 focus:bg-white focus:ring-4 focus:outline-none"
            />
          )}
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="font-display px-1 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
            Net Weight (G)
          </label>
          <Controller
            name="weight"
            control={control}
            render={({ field }) => (
              <Input
                step="0.01"
                type="number"
                placeholder="E.g. 2.04"
                value={field.value ?? ''}
                onChange={(event) => {
                  const value = event.target.value;
                  field.onChange(value === '' ? undefined : Number(value));
                }}
                className="focus:border-gold/50 text-gold font-display h-15.5! w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 text-xl! font-bold! shadow-inner transition-all placeholder:text-slate-300 focus:bg-white focus:outline-none"
              />
            )}
          />
        </div>

        <div>
          <label className="font-display px-1 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
            Purity Level
          </label>

          <Controller
            name="purity"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={(val) => field.onChange(val)}>
                <SelectTrigger className="focus:border-gold/50 font-display text-gold h-15.5! w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 text-xl! font-bold uppercase shadow-inner transition-all focus:bg-white focus:outline-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24K">24 Karat</SelectItem>
                  <SelectItem value="22K">22 Karat</SelectItem>
                  <SelectItem value="18K">18 Karat</SelectItem>
                  <SelectItem value="Bullion">Pure Bullion</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>
      </div>

      <div>
        <label className="font-display px-1 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
          Timestamp
        </label>
        <Controller
          name="createdAt"
          control={control}
          render={({ field }) => (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date-picker-simple"
                  className="focus:border-gold/50 font-display h-15.5! w-full justify-start rounded-2xl border border-slate-100 bg-slate-50 px-6 text-base font-semibold text-slate-950 shadow-inner transition-all focus:bg-white focus:outline-none"
                >
                  {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  onSelect={field.onChange}
                  selected={field.value}
                  defaultMonth={field.value}
                />
              </PopoverContent>
            </Popover>
          )}
        />
      </div>

      <div>
        <label className="font-display px-1 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
          Security Memo
        </label>
        <Controller
          name="note"
          control={control}
          render={({ field }) => (
            <Textarea
              {...field}
              rows={5}
              placeholder="Append specific transaction details or asset markings..."
              className="focus:border-gold/50 w-full resize-none rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5 text-base font-semibold text-slate-950 shadow-inner transition-all placeholder:text-slate-300 focus:bg-white focus:outline-none"
            />
          )}
        />
      </div>

      <SheetClose asChild>
        <Button
          type="submit"
          disabled={!form.formState.isValid}
          className="text-gold-bright font-display shadow-gold/20 hover:bg-royal-green hover:text-gold-bright border-gold/30 mt-auto h-fit! w-full rounded-[2rem] border bg-slate-950 py-6 text-sm font-black tracking-[0.3em] uppercase shadow-2xl transition-all active:scale-95"
        >
          {mode === 'edit' ? 'Save Modifications' : 'Commit to Ledger'}
        </Button>
      </SheetClose>
    </form>
  );
};
