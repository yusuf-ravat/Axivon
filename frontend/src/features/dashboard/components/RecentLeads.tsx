export function RecentLeads() {
  return (
    <div className="p-4 bg-white dark:bg-zinc-800 rounded shadow">
      <h3 className="font-semibold text-lg border-b pb-2 mb-2">Recent Leads</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>John Doe</span>
          <span className="text-blue-500">New</span>
        </div>
        <div className="flex justify-between">
          <span>Jane Smith</span>
          <span className="text-yellow-500">Contacted</span>
        </div>
      </div>
    </div>
  );
}
