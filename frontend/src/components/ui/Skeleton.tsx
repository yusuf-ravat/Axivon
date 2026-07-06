export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-200 dark:bg-zinc-700 rounded ${className || 'h-4 w-full'}`} />
  );
}
