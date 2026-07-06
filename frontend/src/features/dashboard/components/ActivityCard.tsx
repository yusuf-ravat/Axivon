export function ActivityCard() {
  return (
    <div className="p-4 bg-white dark:bg-zinc-800 rounded shadow">
      <h3 className="font-semibold text-lg border-b pb-2 mb-2">Recent Activity</h3>
      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
        <li>Lead "John Doe" updated to "Qualified"</li>
        <li>Meeting scheduled with "Acme Corp"</li>
        <li>Deal worth $5,000 closed by "Agent 1"</li>
      </ul>
    </div>
  );
}
