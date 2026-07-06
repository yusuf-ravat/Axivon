import React, { useEffect, useState } from 'react';
import { Search, Sparkles, User, Settings, FolderOpen, Plus } from 'lucide-react';

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const commands = [
    { category: 'Navigation', items: [
      { label: 'Go to Dashboard', icon: FolderOpen, action: () => { window.location.href = '/'; } },
      { label: 'Go to Leads', icon: FolderOpen, action: () => { window.location.href = '/leads'; } },
      { label: 'Go to Settings', icon: Settings, action: () => { window.location.href = '/settings'; } },
    ]},
    { category: 'AI Tools', items: [
      { label: 'Ask AI Assistant', icon: Sparkles, action: () => { window.location.href = '/ai-assistant'; } },
    ]},
    { category: 'Actions', items: [
      { label: 'Create New Lead', icon: Plus, action: () => { console.log('Create lead'); } },
      { label: 'Create Task', icon: Plus, action: () => { console.log('Create task'); } },
    ]}
  ];

  const filteredCommands = commands.map(group => ({
    ...group,
    items: group.items.filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
  })).filter(group => group.items.length > 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Main Container */}
      <div className="relative w-full max-w-xl rounded-xl border border-border bg-card shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 text-card-foreground">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/30">
          <Search size={18} className="text-muted-foreground" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm placeholder:text-muted-foreground outline-none text-foreground"
          />
          <button
            onClick={onClose}
            className="text-[10px] bg-muted border border-border px-1.5 py-0.5 rounded font-mono text-muted-foreground"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 flex flex-col gap-3">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((group, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-3 py-1">
                  {group.category}
                </span>
                {group.items.map((item, itemIdx) => (
                  <button
                    key={itemIdx}
                    onClick={() => {
                      item.action();
                      onClose();
                    }}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left hover:bg-muted text-muted-foreground hover:text-foreground transition-colors w-full cursor-pointer"
                  >
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            ))
          ) : (
            <div className="py-6 text-center text-sm text-muted-foreground">
              No results found for "{query}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
