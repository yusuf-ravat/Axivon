import React from 'react';

export function Select({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className="px-3 py-2 border rounded bg-white dark:bg-zinc-800" {...props}>
      {children}
    </select>
  );
}
