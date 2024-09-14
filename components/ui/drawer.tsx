import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

export function Drawer({ children, open, onOpenChange }: { children: ReactNode, open: boolean, onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed right-0 top-0 bottom-0 w-[300px] bg-white shadow-md">
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function DrawerTrigger({ children }: { children: ReactNode }) {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>;
}

export function DrawerContent({ children }: { children: ReactNode }) {
  return <div className="p-4">{children}</div>;
}
