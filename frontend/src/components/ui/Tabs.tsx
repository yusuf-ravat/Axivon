import React from 'react';

export function Tabs({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex border-b gap-4">
      {children}
    </div>
  );
}
