export function Sidebar() {
  return (
    <aside className="w-64 border-r min-h-screen bg-white dark:bg-zinc-900 p-4">
      <div className="space-y-4">
        <div className="font-bold text-gray-400 text-xs tracking-wider uppercase">Menu</div>
        <ul className="space-y-2">
          <li><a href="/" className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-800">Dashboard</a></li>
          <li><a href="/leads" className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-800">Leads</a></li>
          <li><a href="/contacts" className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-800">Contacts</a></li>
        </ul>
      </div>
    </aside>
  );
}
