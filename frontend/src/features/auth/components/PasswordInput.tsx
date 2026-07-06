import React from 'react';

export function PasswordInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="password"
      className="block w-full rounded border-gray-300 p-2"
      {...props}
    />
  );
}
