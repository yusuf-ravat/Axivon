import React from 'react';
import { Button, Card } from '../../components/ui';
import { Sparkles, ArrowRight, CheckSquare } from 'lucide-react';
import BrandPanel from './BrandPanel';
import logoImg from '../../assets/logo/Axivon-logo.png';

export default function VerifyEmail() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col lg:grid lg:grid-cols-12 font-sans overflow-hidden">

      {/* LEFT PANEL: Sleek, Minimalist 3D Brand Panel */}
      <BrandPanel />

      {/* RIGHT PANEL: Clean Auth Form */}
      <div className="flex-1 lg:col-span-6 flex items-center justify-center p-8 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] relative">
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-[420px] flex flex-col gap-6 relative z-10">
          
          {/* Logo showing only on mobile screen widths */}
          <div className="flex lg:hidden items-center gap-3 justify-center mb-2">
            <img src={logoImg} alt="Axivon Logo" className="w-8 h-8 object-contain shrink-0" />
            <span className="font-extrabold text-lg text-zinc-900 tracking-tight">Axivon CRM</span>
          </div>

          <Card className="glass-card p-8 flex flex-col gap-6 rounded-[28px] border border-white/60 shadow-[0_12px_40px_rgba(31,38,135,0.06)] bg-white/50 backdrop-blur-xl">
            <div className="text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4 border border-emerald-100 animate-bounce duration-1000">
                <CheckSquare size={20} />
              </div>
              <h2 className="text-2xl font-black text-emerald-600 tracking-tight">Email Verified!</h2>
              <p className="text-xs text-zinc-500 mt-2.5 leading-relaxed max-w-[300px]">
                Your corporate email address has been successfully verified. You can now access your CRM workspace directory.
              </p>
            </div>

            <Button
              onClick={() => window.location.href = '/auth/login'}
              className="w-full h-11 bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-500/10 flex items-center justify-center gap-1.5 mt-2 transition-all hover:scale-[1.01]"
            >
              <span>Go to Login</span>
              <ArrowRight size={14} />
            </Button>
          </Card>

        </div>
      </div>
    </div>
  );
}
