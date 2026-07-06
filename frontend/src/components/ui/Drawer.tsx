import React from 'react';

export function Drawer({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-y-0 right-0 bg-white dark:bg-zinc-800 shadow-xl w-80 p-6 z-50">
      {children}
    </div>
  );
}
