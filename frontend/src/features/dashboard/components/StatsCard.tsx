export function StatsCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="p-4 bg-white dark:bg-zinc-800 rounded shadow">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
