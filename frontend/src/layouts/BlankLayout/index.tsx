import React from 'react';

export default function BlankLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="blank-layout">
      {children}
    </div>
  );
}
