import React from 'react';

export function Popover({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative inline-block">
      {children}
    </div>
  );
}
