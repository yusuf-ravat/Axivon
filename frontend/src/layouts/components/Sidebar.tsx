import React from 'react';
import logoImg from '../../assets/logo/Axivon-logo.png';
import {
  LayoutDashboard,
  Target,
  Building2,
  Users,
  TrendingUp,
  Activity,
  Briefcase,
  Calendar,
  PhoneCall,
  Phone,
  Folder,
  Bot,
  Settings,
  Zap,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  FileText
} from 'lucide-react';

export interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (val: boolean) => void;
}

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  const sections = [
    {
      group: 'CRM',
      items: [
        { label: 'Leads', icon: Target, path: '/leads' },
        { label: 'Companies', icon: Building2, path: '/companies' },
        { label: 'Contacts', icon: Users, path: '/contacts' },
        { label: 'Deals', icon: TrendingUp, path: '/deals' },
        { label: 'Activities', icon: Activity, path: '/activities' },
      ]
    },
    {
      group: 'Work',
      items: [
        { label: 'Tasks', icon: Briefcase, path: '/tasks', badge: '24' },
        { label: 'Calendar', icon: Calendar, path: '/calendar' },
        { label: 'Meetings', icon: PhoneCall, path: '/meetings' },
        { label: 'Calls', icon: Phone, path: '/calls' },
      ]
    },
    {
      group: 'AI Suite',
      headerAction: '+',
      items: [
        { label: 'AI Assistant', icon: Bot, path: '/ai-assistant' },
        { label: 'Business Memory', icon: FileText, path: '/business-memory' },
        { label: 'AI Command Center', icon: Zap, path: '/ai-commands' },
        { label: 'Insights', icon: SparklesIcon, path: '/insights' },
      ]
    },
    {
      group: 'Reports',
      items: [
        { label: 'Reports', icon: Folder, path: '/reports' },
        { label: 'Analytics', icon: Activity, path: '/analytics' },
      ]
    },
    {
      group: 'Settings',
      items: [
        { label: 'Settings', icon: Settings, path: '/settings' },
        { label: 'Users & Roles', icon: Users, path: '/users' },
        { label: 'System Settings', icon: ShieldCheck, path: '/system-settings' },
      ]
    }
  ];

  return (
    <aside className={`bg-white text-zinc-500 flex flex-col border-r border-zinc-200 shrink-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className={`h-20 flex items-center border-b border-zinc-200 justify-center transition-all duration-300 ${isCollapsed ? 'px-2' : 'px-6 lg:justify-start'}`}>
        <img
          src={logoImg}
          alt="Axivon Logo"
          className={`object-contain shrink-0 transition-all duration-300 ${isCollapsed ? 'w-10 h-10' : 'w-42 h-10'}`}
        />
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-5">
        {/* Dashboard Link (Active State matching image) */}
        <a
          href="/"
          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold bg-[#ebedfa] text-[#4f46e5] transition-all hover:translate-x-0.5 ${isCollapsed ? 'justify-center' : ''}`}
        >
          <LayoutDashboard size={18} className="shrink-0" />
          {!isCollapsed && <span>Dashboard</span>}
        </a>

        {sections.map((sec, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            {!isCollapsed && (
              <div className="flex justify-between items-center px-4 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  {sec.group}
                </span>
                {sec.headerAction && (
                  <span className="text-xs text-[#4f46e5] font-bold cursor-pointer">{sec.headerAction}</span>
                )}
              </div>
            )}
            {sec.items.map((item, itemIdx) => (
              <a
                key={itemIdx}
                href={item.path}
                className={`flex items-center justify-between px-4 py-2 rounded-xl text-sm font-semibold hover:text-[#4f46e5] hover:bg-zinc-50 transition-all hover:translate-x-0.5 ${isCollapsed ? 'justify-center' : ''}`}
                title={item.label}
              >
                <div className="flex items-center gap-3">
                  {typeof item.icon === 'function' ? <item.icon className="w-[18px] h-[18px] shrink-0" /> : <span className="w-[18px] h-[18px] flex items-center justify-center shrink-0">{React.createElement(item.icon, { size: 18 })}</span>}
                  {!isCollapsed && <span>{item.label}</span>}
                </div>
                {!isCollapsed && item.badge && (
                  <span className="bg-zinc-100 text-zinc-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        ))}

        {/* Upgrade to Pro Card */}
        {!isCollapsed && (
          <div className="mt-auto bg-[#f8fafc] border border-zinc-200/60 rounded-3xl p-5 flex flex-col gap-3 relative overflow-hidden">
            <div>
              <h4 className="text-zinc-900 text-xs font-bold">Upgrade to Pro</h4>
              <p className="text-[10px] text-zinc-500 mt-1 leading-relaxed">
                Unlock AI features & more.
              </p>
            </div>
            <button className="w-8 h-8 rounded-full bg-[#4f46e5] text-white flex items-center justify-center hover:bg-[#4338ca] self-end shadow shadow-indigo-500/20">
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}
