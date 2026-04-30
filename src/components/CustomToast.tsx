import type { CustomToastProps } from '@/types/toast';
import { IconAlertCircle, IconCircleCheck } from '@tabler/icons-react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import type { FC } from 'react';

export const CustomToast: FC<CustomToastProps> = (props) => {
  const { type, message } = props;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className={clsx(
          'border-gold/20 shadow-gold/10 flex items-center gap-5 rounded-[2rem] border bg-white px-8 py-5 shadow-2xl',
        )}
      >
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${type === 'success' ? 'bg-gold/10 text-gold' : 'bg-rose-50 text-rose-500'}`}
        >
          {type === 'success' ? (
            <IconCircleCheck className="h-5 w-5" />
          ) : (
            <IconAlertCircle className="h-5 w-5" />
          )}
        </div>
        <span className="font-display pr-2 text-sm font-bold text-slate-700">{message}</span>
      </motion.div>
    </AnimatePresence>
  );
};
