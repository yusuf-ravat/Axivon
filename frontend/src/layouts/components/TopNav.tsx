import React, { useState } from 'react';
import { Search, Plus, Bell, MessageSquare, Menu, LogOut, User as UserIcon, Settings, Users, Briefcase, CheckSquare } from 'lucide-react';
import { Button } from '../../components/ui';
import { useAuthStore } from '../../store/authStore';

export interface TopNavProps {
  onSearchClick: () => void;
  onToggleSidebar: () => void;
}

export function TopNav({ onSearchClick, onToggleSidebar }: TopNavProps) {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);

  const handleLogout = () => {
    logout();
    window.location.href = '/auth/login';
  };

  return (
    <header className="h-20 border-b border-zinc-200 bg-white flex items-center justify-between px-8 sticky top-0 z-30 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      
      {/* Left Menu toggle & Search input */}
      <div className="flex items-center gap-4 max-w-sm w-full">
        <button
          onClick={onToggleSidebar}
          className="p-2 hover:bg-zinc-100 rounded-xl text-zinc-500 transition-colors"
        >
          <Menu size={20} />
        </button>
        <button
          onClick={onSearchClick}
          className="flex items-center gap-3 px-4 py-2 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-400 text-sm w-full text-left hover:bg-zinc-50 transition-colors select-none"
        >
          <Search size={16} />
          <span>Search CRM...</span>
          <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-zinc-200 px-1.5 font-mono text-[9px] font-semibold text-zinc-500">
            Ctrl + K
          </kbd>
        </button>
      </div>

      {/* Right User Actions */}
      <div className="flex items-center gap-5">
        
        {/* Quick Add Button */}
        <div 
          className="relative"
          onMouseEnter={() => setIsQuickAddOpen(true)}
          onMouseLeave={() => setIsQuickAddOpen(false)}
        >
          <Button 
            onClick={() => setIsQuickAddOpen(!isQuickAddOpen)}
            className="rounded-xl h-10 px-5 bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold text-xs gap-1.5 shadow-md shadow-indigo-500/10"
          >
            <Plus size={16} />
            <span>Quick Add</span>
          </Button>

          {isQuickAddOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-xl border border-zinc-200 bg-white p-2 shadow-xl flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider px-3 py-1.5 border-b border-zinc-100 mb-1 block">
                Quick Actions
              </span>
              <a
                href="/leads?add=true"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <Users size={14} className="text-zinc-400" />
                <span>Create Lead</span>
              </a>
              <a
                href="/deals?add=true"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <Briefcase size={14} className="text-zinc-400" />
                <span>Create Deal</span>
              </a>
              <a
                href="/tasks?add=true"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <CheckSquare size={14} className="text-zinc-400" />
                <span>Create Task</span>
              </a>
            </div>
          )}
        </div>


        {/* Alert Icons */}
        <button className="relative w-10 h-10 border border-zinc-200 flex items-center justify-center rounded-xl hover:bg-zinc-100 text-zinc-500 transition-colors">
          <Bell size={18} />
          <span className="absolute top-1 right-1 bg-rose-500 text-white rounded-full text-[8px] font-bold w-4 h-4 flex items-center justify-center border-2 border-white">
            12
          </span>
        </button>

        <button className="relative w-10 h-10 border border-zinc-200 flex items-center justify-center rounded-xl hover:bg-zinc-100 text-zinc-500 transition-colors">
          <MessageSquare size={18} />
          <span className="absolute top-1 right-1 bg-rose-500 text-white rounded-full text-[8px] font-bold w-4 h-4 flex items-center justify-center border-2 border-white">
            5
          </span>
        </button>

        {/* Profile Card */}
        <div 
          className="relative"
          onMouseEnter={() => setIsProfileOpen(true)}
          onMouseLeave={() => setIsProfileOpen(false)}
        >
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 border-l border-zinc-200 pl-5 text-left focus:outline-none cursor-pointer hover:opacity-85 transition-opacity"
          >
            <div className="flex flex-col text-right">
              <span className="text-xs font-bold text-zinc-800 leading-tight">
                {user?.name || 'David Johnson'}
              </span>
              <span className="text-[10px] text-zinc-400 font-semibold leading-normal">
                {user?.role || 'Super Admin'}
              </span>
            </div>
            {user?.name ? (
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center border-2 border-indigo-100 uppercase shadow-sm">
                {user.name.charAt(0)}
              </div>
            ) : (
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
                alt="Default Avatar"
                className="w-10 h-10 rounded-full object-cover border border-zinc-200"
              />
            )}
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-zinc-200 bg-white p-2 shadow-xl flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
              <div className="px-3 py-2 border-b border-zinc-100 mb-1">
                <p className="text-xs font-bold text-zinc-800">{user?.name || 'David Johnson'}</p>
                <p className="text-[10px] text-zinc-400 font-semibold mt-0.5">{user?.email || 'admin@axivon.com'}</p>
              </div>
              <a
                href="/settings"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <UserIcon size={14} />
                <span>My Profile</span>
              </a>
              <a
                href="/settings"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                <Settings size={14} />
                <span>Settings</span>
              </a>
              <div className="border-t border-zinc-100 my-1" />
              <button
                onClick={handleLogout}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold hover:bg-rose-50 text-rose-600 hover:text-rose-700 w-full text-left transition-colors cursor-pointer"
              >
                <LogOut size={14} />
                <span>Log Out</span>
              </button>
            </div>
          )}
        </div>

      </div>

    </header>
  );
}
