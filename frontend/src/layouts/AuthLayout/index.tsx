import React from 'react';

export default function AuthLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="auth-layout min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950">
      <main className="w-full max-w-md p-6 bg-white dark:bg-zinc-900 rounded-lg shadow">
        {children}
      </main>
    </div>
  );
}
