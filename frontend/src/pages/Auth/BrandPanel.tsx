import React from 'react';
import { Sparkles, CheckSquare } from 'lucide-react';
import logoImg from '../../assets/logo/Axivon-logo.png';

export default function BrandPanel() {
  return (
    <div className="hidden lg:flex lg:col-span-6 bg-gradient-to-br from-[#090a0f] via-[#0e1017] to-[#090a0f] relative flex-col justify-between p-16 overflow-hidden border-r border-[#1e293b]">
      {/* Soft Indigo Light Glow */}
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-[#4f46e5]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Logo and Brand Header */}
      <div className="relative z-10 flex items-center gap-3">
        <img src={logoImg} alt="Axivon Logo" className="w-44 h-auto object-contain shrink-0" />
      </div>

      {/* Minimal taglines */}
      <div className="relative z-10 flex flex-col gap-2.5 max-w-md mt-8">
        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2.5 py-1 rounded-full w-fit border border-indigo-500/20">
          Enterprise Workspace
        </span>
        <h3 className="text-3xl lg:text-[34px] font-black tracking-tight text-white leading-tight mt-1.5">
          The intelligence platform for <span className="bg-gradient-to-r from-indigo-400 via-[#c084fc] to-indigo-300 bg-clip-text text-transparent">customer growth.</span>
        </h3>
        <p className="text-[13px] text-zinc-400 leading-relaxed mt-2 font-medium">
          Manage corporate contacts, analyze sales activities, and scale your workflows from a single unified hub.
        </p>
      </div>

      {/* Dynamic 3D Layered Schematic */}
      <div className="relative z-10 w-full max-w-[360px] aspect-[4/3] flex items-center justify-center mx-auto [perspective:1000px] select-none my-6">
        {/* Layer 1: Lead Conversion (Middle-Bottom) */}
        <div className="absolute w-[280px] h-[180px] rounded-2xl border border-indigo-500/20 bg-indigo-950/20 backdrop-blur-md p-4 shadow-xl flex flex-col justify-between transition-all duration-700 [transform:rotateX(28deg)_rotateY(-14deg)_rotateZ(4deg)_translateZ(-10px)] animate-float-pipeline hover:translate-y-[-10px]">
          <div className="flex items-center justify-between border-b border-indigo-500/10 pb-1.5">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Lead Conversion</span>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col gap-1 mt-1">
            <span className="text-[18px] font-black text-emerald-400">+42% Growth</span>
            <span className="text-[10.5px] text-zinc-300 font-medium leading-normal">Close deals 2x faster with automated routing pipelines.</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-6 h-6 rounded-full bg-indigo-600/60 border border-indigo-400/40 text-[9px] text-white flex items-center justify-center font-bold">JD</div>
            <div className="w-6 h-6 rounded-full bg-emerald-600/60 border border-emerald-400/40 text-[9px] text-white flex items-center justify-center font-bold">AS</div>
            <div className="w-6 h-6 rounded-full bg-amber-600/60 border border-amber-400/40 text-[9px] text-white flex items-center justify-center font-bold">ML</div>
            <span className="text-[9.5px] text-zinc-500 font-bold ml-1">Weekly conversions</span>
          </div>
        </div>

        {/* Layer 2: Deal Pipeline (Middle-Top) */}
        <div className="absolute w-[280px] h-[180px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-2xl flex flex-col justify-between transition-all duration-700 [transform:rotateX(28deg)_rotateY(-14deg)_rotateZ(4deg)_translateZ(10px)] animate-float-ai hover:translate-y-[-15px] z-10">
          <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Deal Pipeline</span>
            <span className="text-[9.5px] font-mono font-bold text-emerald-400">Active</span>
          </div>
          <div className="flex flex-col mt-1 gap-0.5">
            <span className="text-[18px] font-black text-white">$148,500</span>
            <span className="text-[10.5px] text-zinc-300 font-medium leading-normal">Clean visual pipelines built for modern sales teams.</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-2 flex flex-col gap-0.5 text-center">
              <span className="text-[9px] text-[#818cf8] font-bold">Acme Corp</span>
            </div>
            <div className="flex-1 bg-indigo-600/10 border border-indigo-500/20 rounded-lg p-2 flex flex-col gap-0.5 text-center">
              <span className="text-[9px] text-emerald-400 font-bold">Apex Ltd</span>
            </div>
          </div>
        </div>

        {/* Layer 3: AI Intelligence (Top) */}
        <div className="absolute w-[280px] h-[180px] rounded-2xl border border-violet-500/40 bg-violet-950/30 backdrop-blur-md p-3.5 shadow-2xl flex flex-col justify-between transition-all duration-700 [transform:rotateX(28deg)_rotateY(-14deg)_rotateZ(4deg)_translateZ(30px)] animate-float-tasks hover:translate-y-[-20px] z-20 overflow-hidden">
          {/* Ambient inner card glow */}
          <div className="absolute top-[-20%] right-[-20%] w-24 h-24 bg-violet-500/20 rounded-full blur-xl pointer-events-none" />

          <div className="flex items-center justify-between border-b border-violet-500/20 pb-1.5 relative z-10">
            <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={10} className="animate-spin duration-3000" />
              AI Intelligence
            </span>
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping" />
          </div>

          {/* Chat flow simulation */}
          <div className="flex flex-col gap-1.5 mt-1 relative z-10">
            <div className="flex justify-end">
              <span className="text-[8px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-full border border-zinc-700/50 font-bold">
                forecast conversion?
              </span>
            </div>
            <div className="bg-violet-900/10 border border-violet-500/25 rounded-xl p-2 flex flex-col gap-1">
              <p className="text-[9.5px] text-zinc-200 leading-normal font-medium">
                "Apex Ltd has an <span className="text-violet-300 font-extrabold">86% probability</span>. Suggest follow-up."
              </p>
              {/* Voice/AI wave pulse indicator */}
              <div className="flex items-center gap-1 mt-0.5">
                <div className="w-0.5 h-2.5 bg-violet-400 rounded-full animate-pulse" />
                <div className="w-0.5 h-4 bg-indigo-400 rounded-full animate-pulse [animation-delay:0.2s]" />
                <div className="w-0.5 h-1.5 bg-violet-400 rounded-full animate-pulse [animation-delay:0.4s]" />
                <div className="w-0.5 h-3 bg-indigo-400 rounded-full animate-pulse [animation-delay:0.1s]" />
                <span className="text-[8px] text-zinc-500 font-bold ml-1">AI Co-pilot thinking...</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center relative z-10 pt-1 border-t border-violet-500/10">
            <span className="text-[9.5px] text-violet-300/80 font-bold">AI analytics and automated insights</span>
            <span className="text-[9.5px] bg-violet-500/20 text-violet-300 px-1.5 py-0.5 rounded-full font-bold">
              Active
            </span>
          </div>
        </div>

        {/* Layer 4: Tasks & Activities (Bottom-most/Last) */}
        <div className="absolute w-[280px] h-[180px] rounded-2xl border border-rose-500/20 bg-rose-950/20 backdrop-blur-md p-3.5 shadow-2xl flex flex-col justify-between transition-all duration-700 [transform:rotateX(28deg)_rotateY(-14deg)_rotateZ(4deg)_translateZ(-30px)] animate-float-db hover:translate-y-[-25px] z-30">
          <div className="flex items-center justify-between border-b border-rose-500/10 pb-1.5">
            <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
              <CheckSquare size={10} />
              Tasks & Activities
            </span>
            <span className="text-[9.5px] text-zinc-500 font-bold">14 Upcoming</span>
          </div>

          <div className="flex flex-col gap-1.5 mt-1">
            <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-lg p-1.5 px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-[9.5px] text-zinc-200 font-bold leading-none line-through opacity-50">Call Apex Ltd</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/5 rounded-lg p-1.5 px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 animate-pulse" />
              <span className="text-[9.5px] text-zinc-200 font-bold leading-none">Draft follow-up email contract</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-1 border-t border-rose-500/10">
            <span className="text-[9.5px] text-rose-300/80 font-bold">Synchronize team workflows in real-time.</span>
            <span className="text-[9.5px] bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded-full font-bold">
              Syncing
            </span>
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="relative z-10 text-xs text-zinc-500 font-medium">
        <span>© 2026 Axivon CRM Inc. All rights reserved.</span>
      </div>
    </div>
  );
}
