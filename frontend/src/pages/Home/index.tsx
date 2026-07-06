import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge, Button } from '../../components/ui';
import { useAuthStore } from '../../store/authStore';
import {
  Sparkles,
  TrendingUp,
  Users,
  Briefcase,
  Calendar,
  TrendingDown,
  Send
} from 'lucide-react';

export default function Home() {
  const [aiQuery, setAiQuery] = useState('');
  const [selectedRange, setSelectedRange] = useState('This Month');
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [pipelineRange, setPipelineRange] = useState('This Month');
  const [isPipelineOpen, setIsPipelineOpen] = useState(false);
  const [revenueRange, setRevenueRange] = useState('This Month');
  const [isRevenueOpen, setIsRevenueOpen] = useState(false);
  const [leadsRange, setLeadsRange] = useState('This Month');
  const [isLeadsOpen, setIsLeadsOpen] = useState(false);
  const [agentsRange, setAgentsRange] = useState('This Month');
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  const userName = user?.name || 'David';

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8 max-w-[1600px] mx-auto text-zinc-800">

        {/* Welcome Greeting Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
              Welcome back, {userName}!
            </h1>
            <p className="text-sm text-zinc-500 mt-1">Here's what's happening with your business today.</p>
          </div>

          {/* Date Selector */}
          <div className="relative">
            <button
              onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
              className="flex items-center gap-2 bg-white border border-zinc-200 pl-9 pr-7 py-2 rounded-xl text-xs font-bold text-zinc-600 shadow-sm hover:bg-zinc-50 transition-colors select-none relative h-9 cursor-pointer"
            >
              <Calendar size={14} className="absolute left-3 top-2.5 text-zinc-400" />
              <span className="ml-3">{selectedRange}</span>
              <svg
                className="w-2.5 h-2.5 text-zinc-400 transition-transform duration-200 ml-1.5"
                style={{ transform: isDateDropdownOpen ? 'rotate(180deg)' : 'none' }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDateDropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsDateDropdownOpen(false)} />
                <div className="absolute right-0 mt-2 w-40 rounded-xl border border-zinc-200 bg-white p-2 shadow-xl flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider px-3 py-1.5 border-b border-zinc-100 mb-1 block">
                    Select Range
                  </span>
                  {['Today', 'This Week', 'This Month', 'This Year'].map((range) => (
                    <button
                      key={range}
                      onClick={() => {
                        setSelectedRange(range);
                        setIsDateDropdownOpen(false);
                      }}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-colors w-full text-left cursor-pointer ${selectedRange === range
                          ? 'bg-indigo-50 text-[#4f46e5] font-bold'
                          : 'hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900'
                        }`}
                    >
                      <span>{range}</span>
                      {selectedRange === range && <span className="w-1.5 h-1.5 bg-[#4f46e5] rounded-full" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Metrics Row (5 Cards!) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Card 1: Revenue */}
          <Card className="bg-white border border-zinc-200 p-5 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Total Revenue</span>
                <div className="text-2xl font-black text-zinc-900 mt-2">$124,580</div>
                <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 mt-1">
                  <TrendingUp size={10} />
                  <span>+12.5%</span>
                  <span className="text-zinc-400">vs last month</span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">
                $
              </div>
            </div>
            <div className="flex items-end justify-between gap-1 h-8 mt-4 px-1.5 overflow-hidden">
              <div className="w-1.5 bg-indigo-500 rounded-full animate-pulse [animation-duration:1.5s]" style={{ height: '40%' }} />
              <div className="w-1.5 bg-indigo-500 rounded-full animate-pulse [animation-duration:1.2s] [animation-delay:0.1s]" style={{ height: '75%' }} />
              <div className="w-1.5 bg-indigo-500 rounded-full animate-pulse [animation-duration:1.8s] [animation-delay:0.3s]" style={{ height: '55%' }} />
              <div className="w-1.5 bg-indigo-500 rounded-full animate-pulse [animation-duration:1.4s] [animation-delay:0.2s]" style={{ height: '90%' }} />
              <div className="w-1.5 bg-indigo-500 rounded-full animate-pulse [animation-duration:1.6s] [animation-delay:0.4s]" style={{ height: '65%' }} />
              <div className="w-1.5 bg-indigo-500 rounded-full animate-pulse [animation-duration:1.3s] [animation-delay:0.15s]" style={{ height: '45%' }} />
              <div className="w-1.5 bg-indigo-500 rounded-full animate-pulse [animation-duration:1.7s] [animation-delay:0.5s]" style={{ height: '80%' }} />
              <div className="w-1.5 bg-indigo-500 rounded-full animate-pulse [animation-duration:1.5s] [animation-delay:0.25s]" style={{ height: '50%' }} />
              <div className="w-1.5 bg-indigo-500 rounded-full animate-pulse [animation-duration:1.9s] [animation-delay:0.35s]" style={{ height: '70%' }} />
              <div className="w-1.5 bg-indigo-500 rounded-full animate-pulse [animation-duration:1.4s] [animation-delay:0.1s]" style={{ height: '85%' }} />
            </div>
          </Card>

          {/* Card 2: New Leads */}
          <Card className="bg-white border border-zinc-200 p-5 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">New Leads</span>
                <div className="text-2xl font-black text-zinc-900 mt-2">1,250</div>
                <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 mt-1">
                  <TrendingUp size={10} />
                  <span>+8.3%</span>
                  <span className="text-zinc-400">vs last month</span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-[#4f46e5] flex items-center justify-center">
                <Users size={16} />
              </div>
            </div>
            <div className="flex items-end justify-between gap-1 h-8 mt-4 px-1.5 overflow-hidden">
              <div className="w-1.5 bg-purple-500 rounded-full animate-pulse [animation-duration:1.3s] [animation-delay:0.2s]" style={{ height: '50%' }} />
              <div className="w-1.5 bg-purple-500 rounded-full animate-pulse [animation-duration:1.7s] [animation-delay:0.4s]" style={{ height: '35%' }} />
              <div className="w-1.5 bg-purple-500 rounded-full animate-pulse [animation-duration:1.4s] [animation-delay:0.1s]" style={{ height: '70%' }} />
              <div className="w-1.5 bg-purple-500 rounded-full animate-pulse [animation-duration:1.8s] [animation-delay:0.3s]" style={{ height: '45%' }} />
              <div className="w-1.5 bg-purple-500 rounded-full animate-pulse [animation-duration:1.5s] [animation-delay:0.5s]" style={{ height: '85%' }} />
              <div className="w-1.5 bg-purple-500 rounded-full animate-pulse [animation-duration:1.6s] [animation-delay:0.15s]" style={{ height: '60%' }} />
              <div className="w-1.5 bg-purple-500 rounded-full animate-pulse [animation-duration:1.2s] [animation-delay:0.25s]" style={{ height: '40%' }} />
              <div className="w-1.5 bg-purple-500 rounded-full animate-pulse [animation-duration:1.9s] [animation-delay:0.35s]" style={{ height: '75%' }} />
              <div className="w-1.5 bg-purple-500 rounded-full animate-pulse [animation-duration:1.4s] [animation-delay:0.1s]" style={{ height: '55%' }} />
              <div className="w-1.5 bg-purple-500 rounded-full animate-pulse [animation-duration:1.5s] [animation-delay:0.2s]" style={{ height: '90%' }} />
            </div>
          </Card>

          {/* Card 3: Deals Won */}
          <Card className="bg-white border border-zinc-200 p-5 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Deals Won</span>
                <div className="text-2xl font-black text-zinc-900 mt-2">342</div>
                <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-600 mt-1">
                  <TrendingUp size={10} />
                  <span>+15.7%</span>
                  <span className="text-zinc-400">vs last month</span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <TrendingUp size={16} />
              </div>
            </div>
            <div className="flex items-end justify-between gap-1 h-8 mt-4 px-1.5 overflow-hidden">
              <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse [animation-duration:1.8s] [animation-delay:0.1s]" style={{ height: '60%' }} />
              <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse [animation-duration:1.4s] [animation-delay:0.3s]" style={{ height: '80%' }} />
              <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse [animation-duration:1.6s] [animation-delay:0.2s]" style={{ height: '45%' }} />
              <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse [animation-duration:1.3s] [animation-delay:0.4s]" style={{ height: '75%' }} />
              <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse [animation-duration:1.7s] [animation-delay:0.15s]" style={{ height: '90%' }} />
              <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse [animation-duration:1.5s] [animation-delay:0.5s]" style={{ height: '55%' }} />
              <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse [animation-duration:1.9s] [animation-delay:0.25s]" style={{ height: '70%' }} />
              <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse [animation-duration:1.2s] [animation-delay:0.35s]" style={{ height: '35%' }} />
              <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse [animation-duration:1.5s] [animation-delay:0.1s]" style={{ height: '50%' }} />
              <div className="w-1.5 bg-emerald-500 rounded-full animate-pulse [animation-duration:1.4s] [animation-delay:0.2s]" style={{ height: '65%' }} />
            </div>
          </Card>

          {/* Card 4: Tasks Pending */}
          <Card className="bg-white border border-zinc-200 p-5 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Tasks Pending</span>
                <div className="text-2xl font-black text-zinc-900 mt-2">78</div>
                <div className="flex items-center gap-1 text-[10px] font-semibold text-rose-600 mt-1">
                  <TrendingDown size={10} />
                  <span>-5.2%</span>
                  <span className="text-zinc-400">vs last month</span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                <Briefcase size={16} />
              </div>
            </div>
            <div className="flex items-end justify-between gap-1 h-8 mt-4 px-1.5 overflow-hidden">
              <div className="w-1.5 bg-orange-500 rounded-full animate-pulse [animation-duration:1.4s] [animation-delay:0.2s]" style={{ height: '40%' }} />
              <div className="w-1.5 bg-orange-500 rounded-full animate-pulse [animation-duration:1.5s] [animation-delay:0.4s]" style={{ height: '55%' }} />
              <div className="w-1.5 bg-orange-500 rounded-full animate-pulse [animation-duration:1.3s] [animation-delay:0.1s]" style={{ height: '35%' }} />
              <div className="w-1.5 bg-orange-500 rounded-full animate-pulse [animation-duration:1.7s] [animation-delay:0.3s]" style={{ height: '60%' }} />
              <div className="w-1.5 bg-orange-500 rounded-full animate-pulse [animation-duration:1.6s] [animation-delay:0.5s]" style={{ height: '50%' }} />
              <div className="w-1.5 bg-orange-500 rounded-full animate-pulse [animation-duration:1.8s] [animation-delay:0.15s]" style={{ height: '75%' }} />
              <div className="w-1.5 bg-orange-500 rounded-full animate-pulse [animation-duration:1.2s] [animation-delay:0.25s]" style={{ height: '45%' }} />
              <div className="w-1.5 bg-orange-500 rounded-full animate-pulse [animation-duration:1.9s] [animation-delay:0.35s]" style={{ height: '80%' }} />
              <div className="w-1.5 bg-orange-500 rounded-full animate-pulse [animation-duration:1.5s] [animation-delay:0.1s]" style={{ height: '65%' }} />
              <div className="w-1.5 bg-orange-500 rounded-full animate-pulse [animation-duration:1.4s] [animation-delay:0.2s]" style={{ height: '70%' }} />
            </div>
          </Card>

          {/* Card 5: Meetings Today */}
          <Card className="bg-white border border-zinc-200 p-5 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Meetings Today</span>
                <div className="text-2xl font-black text-zinc-900 mt-2">6</div>
                <div className="flex items-center gap-1 text-[10px] font-semibold text-zinc-500 mt-1">
                  <span>vs yesterday</span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[#ebedfa] text-[#4f46e5] flex items-center justify-center">
                <Calendar size={16} />
              </div>
            </div>
            <div className="flex items-end justify-between gap-1 h-8 mt-4 px-1.5 overflow-hidden">
              <div className="w-1.5 bg-cyan-500 rounded-full animate-pulse [animation-duration:1.7s] [animation-delay:0.1s]" style={{ height: '70%' }} />
              <div className="w-1.5 bg-cyan-500 rounded-full animate-pulse [animation-duration:1.5s] [animation-delay:0.3s]" style={{ height: '50%' }} />
              <div className="w-1.5 bg-cyan-500 rounded-full animate-pulse [animation-duration:1.9s] [animation-delay:0.2s]" style={{ height: '85%' }} />
              <div className="w-1.5 bg-cyan-500 rounded-full animate-pulse [animation-duration:1.6s] [animation-delay:0.4s]" style={{ height: '60%' }} />
              <div className="w-1.5 bg-cyan-500 rounded-full animate-pulse [animation-duration:1.4s] [animation-delay:0.15s]" style={{ height: '40%' }} />
              <div className="w-1.5 bg-cyan-500 rounded-full animate-pulse [animation-duration:1.8s] [animation-delay:0.5s]" style={{ height: '75%' }} />
              <div className="w-1.5 bg-cyan-500 rounded-full animate-pulse [animation-duration:1.5s] [animation-delay:0.25s]" style={{ height: '55%' }} />
              <div className="w-1.5 bg-cyan-500 rounded-full animate-pulse [animation-duration:1.2s] [animation-delay:0.35s]" style={{ height: '90%' }} />
              <div className="w-1.5 bg-cyan-500 rounded-full animate-pulse [animation-duration:1.5s] [animation-delay:0.1s]" style={{ height: '45%' }} />
              <div className="w-1.5 bg-cyan-500 rounded-full animate-pulse [animation-duration:1.4s] [animation-delay:0.2s]" style={{ height: '80%' }} />
            </div>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Sales Pipeline Funnel (Left) */}
          <Card className="bg-white border border-zinc-200 rounded-[24px]">
            <CardHeader className="border-b border-zinc-100 flex flex-row items-center justify-between p-6 relative">
              <CardTitle className="text-sm font-bold text-zinc-900">Sales Pipeline</CardTitle>
              <div className="relative">
                <button
                  onClick={() => setIsPipelineOpen(!isPipelineOpen)}
                  className="flex items-center gap-1 border border-zinc-200 rounded-lg text-xs px-2.5 py-1 bg-white outline-none font-bold text-zinc-600 hover:bg-zinc-50 cursor-pointer transition-colors"
                >
                  <span>{pipelineRange}</span>
                  <svg className="w-2.5 h-2.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isPipelineOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsPipelineOpen(false)} />
                    <div className="absolute right-0 mt-1.5 w-36 rounded-lg border border-zinc-200 bg-white p-1.5 shadow-lg flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                      {['This Month', 'Last Month', 'This Quarter'].map((range) => (
                        <button
                          key={range}
                          onClick={() => {
                            setPipelineRange(range);
                            setIsPipelineOpen(false);
                          }}
                          className={`px-2.5 py-1.5 rounded-md text-[11px] font-semibold text-left w-full cursor-pointer transition-colors ${pipelineRange === range
                              ? 'bg-indigo-50 text-[#4f46e5] font-bold'
                              : 'hover:bg-zinc-50 text-zinc-500 hover:text-zinc-800'
                            }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6 flex flex-col gap-6">
              <div className="flex justify-center my-1">
                <svg className="w-48 h-36" viewBox="0 0 160 120">
                  <polygon points="10,10 150,10 135,28 25,28" fill="rgb(99, 102, 241)" />
                  <polygon points="27,32 133,32 120,50 40,50" fill="rgb(168, 85, 247)" />
                  <polygon points="42,54 118,54 105,72 55,72" fill="rgb(249, 115, 22)" />
                  <polygon points="57,76 103,76 92,94 68,94" fill="rgb(6, 182, 212)" />
                  <polygon points="70,98 90,98 84,115 76,115" fill="rgb(16, 185, 129)" />
                </svg>
              </div>
              <div className="flex flex-col gap-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#6366f1] rounded-full" />
                    <span className="font-semibold text-zinc-500">New Lead</span>
                  </div>
                  <span className="font-bold">1,250 (100%)</span>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-100 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-[#a855f7] rounded-full" />
                    <span className="font-semibold text-zinc-500">Qualified</span>
                  </div>
                  <span className="font-bold">850 (68%)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Overview (Center) */}
          <Card className="bg-white border border-zinc-200 rounded-[24px]">
            <CardHeader className="border-b border-zinc-100 flex flex-row items-center justify-between p-6 relative">
              <CardTitle className="text-sm font-bold text-zinc-900">Revenue Overview</CardTitle>
              <div className="relative">
                <button
                  onClick={() => setIsRevenueOpen(!isRevenueOpen)}
                  className="flex items-center gap-1 border border-zinc-200 rounded-lg text-xs px-2.5 py-1 bg-white outline-none font-bold text-zinc-600 hover:bg-zinc-50 cursor-pointer transition-colors"
                >
                  <span>{revenueRange}</span>
                  <svg className="w-2.5 h-2.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isRevenueOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsRevenueOpen(false)} />
                    <div className="absolute right-0 mt-1.5 w-36 rounded-lg border border-zinc-200 bg-white p-1.5 shadow-lg flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                      {['This Month', 'Last Month', 'This Quarter'].map((range) => (
                        <button
                          key={range}
                          onClick={() => {
                            setRevenueRange(range);
                            setIsRevenueOpen(false);
                          }}
                          className={`px-2.5 py-1.5 rounded-md text-[11px] font-semibold text-left w-full cursor-pointer transition-colors ${revenueRange === range
                              ? 'bg-indigo-50 text-[#4f46e5] font-bold'
                              : 'hover:bg-zinc-50 text-zinc-500 hover:text-zinc-800'
                            }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold">$124,580</span>
                <span className="text-xs font-semibold text-emerald-600">+12.5% vs last month</span>
              </div>
              <div className="relative border border-zinc-100 bg-zinc-50/50 p-4 rounded-xl">
                <svg className="w-full h-36 overflow-visible" viewBox="0 0 300 120">
                  <path d="M0,100 L30,90 L60,85 L90,60 L120,70 L150,40 L180,30 L210,50 L240,25 L270,10 L300,5" fill="none" stroke="rgb(99, 102, 241)" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="150" cy="40" r="5" fill="rgb(99, 102, 241)" />
                </svg>
                <div className="absolute top-2 left-1/3 bg-zinc-900 text-white rounded-xl px-3 py-1.5 text-[9px] shadow flex flex-col font-bold z-10">
                  <span>May 2025</span>
                  <span className="text-indigo-400 font-black mt-0.5">$125,430</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leads by Source (Right) */}
          <Card className="bg-white border border-zinc-200 rounded-[24px]">
            <CardHeader className="border-b border-zinc-100 flex flex-row items-center justify-between p-6 relative">
              <CardTitle className="text-sm font-bold text-zinc-900">Leads by Source</CardTitle>
              <div className="relative">
                <button
                  onClick={() => setIsLeadsOpen(!isLeadsOpen)}
                  className="flex items-center gap-1 border border-zinc-200 rounded-lg text-xs px-2.5 py-1 bg-white outline-none font-bold text-zinc-600 hover:bg-zinc-50 cursor-pointer transition-colors"
                >
                  <span>{leadsRange}</span>
                  <svg className="w-2.5 h-2.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isLeadsOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsLeadsOpen(false)} />
                    <div className="absolute right-0 mt-1.5 w-36 rounded-lg border border-zinc-200 bg-white p-1.5 shadow-lg flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                      {['This Month', 'Last Month', 'This Quarter'].map((range) => (
                        <button
                          key={range}
                          onClick={() => {
                            setLeadsRange(range);
                            setIsLeadsOpen(false);
                          }}
                          className={`px-2.5 py-1.5 rounded-md text-[11px] font-semibold text-left w-full cursor-pointer transition-colors ${leadsRange === range
                              ? 'bg-indigo-50 text-[#4f46e5] font-bold'
                              : 'hover:bg-zinc-50 text-zinc-500 hover:text-zinc-800'
                            }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f4f4f5" strokeWidth="3.5" />
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#6366f1" strokeWidth="3.5" strokeDasharray="45 100" />
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#a855f7" strokeWidth="3.5" strokeDasharray="20 100" strokeDashoffset="-45" />
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#10b981" strokeWidth="3.5" strokeDasharray="15 100" strokeDashoffset="-65" />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-lg font-black text-zinc-900">1,250</span>
                  <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-wider">Total Leads</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-[10px]">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-zinc-500">Website</span>
                  <span className="font-bold text-zinc-800">45% (562)</span>
                </div>
                <div className="flex justify-between items-center border-t border-zinc-100 pt-1.5">
                  <span className="font-semibold text-zinc-500">LinkedIn</span>
                  <span className="font-bold text-zinc-800">20% (250)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights & Timeline Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* AI Insights (Left) */}
          <Card className="bg-[#f8fafc] border border-zinc-200 rounded-[24px]">
            <CardHeader className="border-b border-zinc-100 flex flex-row items-center justify-between p-6">
              <div className="flex items-center gap-2">
                <CardTitle className="text-sm font-bold text-zinc-900">AI Insights</CardTitle>
              </div>
              <span className="text-[10px] text-zinc-400">Powered by Axivon AI</span>
            </CardHeader>
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center text-xs border-b border-zinc-200/50 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-indigo-50 text-[#4f46e5] rounded-xl"><Sparkles size={16} /></div>
                  <div>
                    <p className="font-bold text-zinc-800">High conversion opportunity</p>
                    <p className="text-[10px] text-zinc-400 mt-0.5">12 leads are highly likely to convert</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="h-8 text-[10px] font-bold rounded-xl border-zinc-200 bg-white">View Leads</Button>
              </div>

              <div className="flex justify-between items-center text-xs border-b border-zinc-200/50 pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-rose-50 text-rose-500 rounded-xl"><AlertIcon className="w-4 h-4" /></div>
                  <div>
                    <p className="font-bold text-zinc-800">Deal at risk</p>
                    <p className="text-[10px] text-zinc-400 mt-0.5">5 deals are at risk of being lost</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="h-8 text-[10px] font-bold rounded-xl border-zinc-200 bg-white">View Deals</Button>
              </div>

              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl"><TrendingUp size={16} /></div>
                  <div>
                    <p className="font-bold text-zinc-800">Revenue prediction</p>
                    <p className="text-[10px] text-zinc-400 mt-0.5">AI predicts 18% revenue growth this quarter</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="h-8 text-[10px] font-bold rounded-xl border-zinc-200 bg-white">View Report</Button>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Activities (Center) */}
          <Card className="bg-white border border-zinc-200 rounded-[24px]">
            <CardHeader className="border-b border-zinc-100 flex flex-row items-center justify-between p-6">
              <CardTitle className="text-sm font-bold text-zinc-900">Upcoming Activities</CardTitle>
              <Button size="sm" variant="outline" className="h-7 text-[10px] rounded-lg border-zinc-200 font-bold">View Calendar</Button>
            </CardHeader>
            <CardContent className="p-6 flex flex-col gap-4 text-xs">
              <div className="flex items-center gap-4 border-b border-zinc-100 pb-3.5">
                <span className="text-[10px] font-bold text-zinc-400 w-16">10:00 AM</span>
                <span className="w-1.5 h-1.5 bg-[#4f46e5] rounded-full" />
                <div className="flex-1">
                  <p className="font-bold text-zinc-800">Product Demo Call</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">John Smith (TechCorp)</p>
                </div>
                <Badge className="bg-purple-50 text-purple-600 border-none font-bold text-[9px] px-2 py-0.5 rounded-lg">Meeting</Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold text-zinc-400 w-16">11:30 AM</span>
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <div className="flex-1">
                  <p className="font-bold text-zinc-800">Follow up with Lead</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">Michael Brown</p>
                </div>
                <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold text-[9px] px-2 py-0.5 rounded-lg">Task</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activities (Right) */}
          <Card className="bg-white border border-zinc-200 rounded-[24px]">
            <CardHeader className="border-b border-zinc-100 flex flex-row items-center justify-between p-6">
              <CardTitle className="text-sm font-bold text-zinc-900">Recent Activities</CardTitle>
              <Button size="sm" variant="outline" className="h-7 text-[10px] rounded-lg border-zinc-200 font-bold">View All</Button>
            </CardHeader>
            <CardContent className="p-6 flex flex-col gap-4 text-xs">
              <div className="flex gap-3 border-b border-zinc-100 pb-3.5">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop" alt="rep" className="w-7 h-7 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-zinc-800">Deal won</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">TechCorp deal won for $12,500</p>
                </div>
                <span className="ml-auto text-[9px] text-zinc-400">2 min ago</span>
              </div>

              <div className="flex gap-3">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" alt="rep" className="w-7 h-7 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-zinc-800">New lead added</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">Sarah Johnson from Innovate LLC</p>
                </div>
                <span className="ml-auto text-[9px] text-zinc-400">15 min ago</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Metrics Details and AI Prompt Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Deals by Stage Bar Chart (Left) */}
          <Card className="bg-white border border-zinc-200 rounded-[24px]">
            <CardHeader className="border-b border-zinc-100 p-6">
              <CardTitle className="text-sm font-bold text-zinc-900">Deals by Stage</CardTitle>
            </CardHeader>
            <CardContent className="p-6 flex items-end justify-between h-44 pb-6 pt-10">
              <div className="flex flex-col items-center gap-2 flex-1">
                <span className="text-[10px] font-bold text-zinc-400">320</span>
                <div className="w-8 bg-[#4f46e5] rounded-t-lg h-24" />
                <span className="text-[9px] font-semibold text-zinc-500">New Lead</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <span className="text-[10px] font-bold text-zinc-400">210</span>
                <div className="w-8 bg-[#4f46e5]/80 rounded-t-lg h-16" />
                <span className="text-[9px] font-semibold text-zinc-500">Qualified</span>
              </div>
              <div className="flex flex-col items-center gap-2 flex-1">
                <span className="text-[10px] font-bold text-zinc-400">135</span>
                <div className="w-8 bg-[#4f46e5]/60 rounded-t-lg h-10" />
                <span className="text-[9px] font-semibold text-zinc-500">Proposal</span>
              </div>
            </CardContent>
          </Card>

          {/* Top Performing Agents (Center) */}
          <Card className="bg-white border border-zinc-200 rounded-[24px]">
            <CardHeader className="border-b border-zinc-100 flex flex-row items-center justify-between p-6 relative">
              <CardTitle className="text-sm font-bold text-zinc-900">Top Performing Agents</CardTitle>
              <div className="relative">
                <button
                  onClick={() => setIsAgentsOpen(!isAgentsOpen)}
                  className="flex items-center gap-1 border border-zinc-200 rounded-lg text-xs px-2.5 py-1 bg-white outline-none font-bold text-zinc-600 hover:bg-zinc-50 cursor-pointer transition-colors"
                >
                  <span>{agentsRange}</span>
                  <svg className="w-2.5 h-2.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isAgentsOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsAgentsOpen(false)} />
                    <div className="absolute right-0 mt-1.5 w-36 rounded-lg border border-zinc-200 bg-white p-1.5 shadow-lg flex flex-col gap-0.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                      {['This Month', 'Last Month', 'This Quarter'].map((range) => (
                        <button
                          key={range}
                          onClick={() => {
                            setAgentsRange(range);
                            setIsAgentsOpen(false);
                          }}
                          className={`px-2.5 py-1.5 rounded-md text-[11px] font-semibold text-left w-full cursor-pointer transition-colors ${agentsRange === range
                              ? 'bg-indigo-50 text-[#4f46e5] font-bold'
                              : 'hover:bg-zinc-50 text-zinc-500 hover:text-zinc-800'
                            }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-6 flex flex-col gap-4 text-xs">
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop" alt="rep" className="w-7 h-7 rounded-full object-cover" />
                <div className="flex-1">
                  <p className="font-bold text-zinc-900">David Johnson</p>
                  <div className="w-full bg-zinc-100 rounded-full h-1.5 mt-1">
                    <div className="bg-[#4f46e5] h-1.5 rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-zinc-900">$24,580</span>
                  <span className="text-[9px] text-emerald-600 font-semibold block">+15.2%</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop" alt="rep" className="w-7 h-7 rounded-full object-cover" />
                <div className="flex-1">
                  <p className="font-bold text-zinc-900">Sarah Williams</p>
                  <div className="w-full bg-zinc-100 rounded-full h-1.5 mt-1">
                    <div className="bg-[#4f46e5] h-1.5 rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-zinc-900">$18,420</span>
                  <span className="text-[9px] text-emerald-600 font-semibold block">+12.5%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Assistant Chat Widget (Right) */}
          <Card className="rounded-[24px] border-none bg-gradient-to-br from-[#4f46e5] via-[#7c3aed] to-[#db2777] p-6 text-white flex flex-col justify-between min-h-[220px] relative overflow-hidden shadow-xl shadow-indigo-500/10">
            {/* Robot Image illustration wrapper */}
            <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-90 select-none">
              <svg className="w-full h-full text-white/10" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="30" />
              </svg>
            </div>

            <div className="z-10">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-black tracking-wide">AI Assistant</span>
                <Badge className="bg-white/15 text-white border-none text-[8px] font-bold px-2 py-0">BETA</Badge>
              </div>
              <p className="text-[10px] text-white/80 mt-1 leading-normal max-w-[200px]">
                Ask Axivon AI anything about your business metrics or forecast pipelines.
              </p>
            </div>

            {/* Prompt Input Box */}
            <div className="flex flex-col gap-3 mt-4 z-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your question..."
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur border border-white/20 rounded-xl pl-3 pr-10 py-2.5 text-xs text-white placeholder:text-white/60 outline-none focus:border-white/40"
                />
                <button className="absolute right-2.5 top-2.5 text-white/80 hover:text-white">
                  <Send size={14} />
                </button>
              </div>

              {/* Shortcut Chips */}
              <div className="flex flex-wrap gap-1.5 text-[8px] font-bold uppercase tracking-wider text-white/90">
                <span className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/25 cursor-pointer transition-colors">Lead insights</span>
                <span className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/25 cursor-pointer transition-colors">Revenue forecast</span>
                <span className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/25 cursor-pointer transition-colors">Deal analysis</span>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </DashboardLayout>
  );
}

function AlertIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}
