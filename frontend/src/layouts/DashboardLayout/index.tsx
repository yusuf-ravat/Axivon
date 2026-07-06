import React, { useState, useEffect } from 'react';
import { Sidebar, TopNav, CommandPalette } from '../components';

export default function DashboardLayout({ children }: { children?: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex bg-background text-foreground transition-colors duration-200">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <TopNav onSearchClick={() => setIsCommandOpen(true)} onToggleSidebar={() => setIsCollapsed(!isCollapsed)} />

        {/* Content Wrapper */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-zinc-50/40 dark:bg-zinc-950/20 relative">
          {/* Glowing Glass Blur Nodes */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-900/5 rounded-full blur-[120px] pointer-events-none" />


          {children}
        </main>

        {/* Footer */}
        <footer className="h-10 border-t border-border bg-card text-[11px] text-muted-foreground flex items-center justify-between px-6">
          <span>&copy; {new Date().getFullYear()} Axivon CRM Inc. All rights reserved.</span>
          <div className="flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            <span>Active</span>
          </div>
        </footer>
      </div>

      {/* Command Palette */}
      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </div>
  );
}
