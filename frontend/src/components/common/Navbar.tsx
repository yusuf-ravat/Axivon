export function Navbar() {
  return (
    <nav className="h-16 border-b flex items-center justify-between px-6 bg-white dark:bg-zinc-900">
      <div className="font-bold text-lg">BusinessOs CRM</div>
      <div className="flex items-center gap-4">
        <span>User Profile</span>
      </div>
    </nav>
  );
}
