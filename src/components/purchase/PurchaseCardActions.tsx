import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import type { PurchaseCardActionsProps } from '@/types/purchase';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { Trash2Icon } from 'lucide-react';
import type { FC } from 'react';
import { Fragment } from 'react';
import { PurchaseModificationSheet } from './PurchaseModificationSheet';

export const PurchaseCardActions: FC<PurchaseCardActionsProps> = (props) => {
  const { purchase, selectedPurchase, onEdit, onDelete, onSelectedPurchaseChange } = props;

  return (
    <Fragment>
      <PurchaseModificationSheet mode="edit" onEdit={onEdit} selectedPurchase={selectedPurchase}>
        <button
          onClick={() => onSelectedPurchaseChange(purchase)}
          className="hover:text-royal-green hover:bg-royal-green/5 cursor-pointer rounded-lg bg-transparent p-2! text-slate-300 transition-all"
          title="Edit Entry"
        >
          <IconEdit className="size-4.5" />
        </button>
      </PurchaseModificationSheet>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            title="Remove Entry"
            className="cursor-pointer rounded-lg bg-transparent p-2! text-slate-300 transition-all hover:bg-rose-50 hover:text-rose-500"
          >
            <IconTrash className="size-4.5" />
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
              <Trash2Icon />
            </AlertDialogMedia>
            <AlertDialogTitle>Delete purchase?</AlertDialogTitle>
            <AlertDialogDescription>
              You will permanently delete this purchase.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive" onClick={() => onDelete(purchase.id)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Fragment>
  );
};
