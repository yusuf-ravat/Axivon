import React, { useState } from 'react';
import { Button, Card } from '../../components/ui';
import { Sparkles, Mail, AlertCircle, ArrowRight, CheckSquare, Key } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import BrandPanel from './BrandPanel';
import logoImg from '../../assets/logo/Axivon-logo.png';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    setLoading(true);
    // Simulate API request delay
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

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
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-2xl bg-indigo-50 text-[#4f46e5] flex items-center justify-center mb-4 border border-indigo-100">
                <Key size={20} />
              </div>
              <h2 className="text-2xl font-black text-zinc-950 tracking-tight">Forgot password</h2>
              <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">Enter your registered email address below, and we'll send you recovery link instructions.</p>
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-rose-50 text-rose-600 text-xs font-bold p-3.5 rounded-xl border border-rose-100/50 animate-shake">
                <AlertCircle size={14} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {sent ? (
              <div className="flex flex-col gap-5 text-center items-center py-2 animate-fade-in">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-100">
                  <CheckSquare size={16} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-bold text-zinc-800">Check your inbox</p>
                  <p className="text-xs text-zinc-500 max-w-[280px] leading-relaxed">
                    We have successfully sent recovery instructions to <span className="font-bold text-[#4f46e5]">{email}</span>.
                  </p>
                </div>
                <Button
                  onClick={() => window.location.href = '/auth/login'}
                  className="w-full h-11 bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-500/10 flex items-center justify-center gap-1.5 mt-2 transition-all hover:scale-[1.01]"
                >
                  <span>Return to Login</span>
                  <ArrowRight size={14} />
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      disabled={loading}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/70 border border-zinc-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-500/10 transition-all disabled:opacity-50"
                    />
                    <Mail size={14} className="absolute left-3.5 top-3.5 text-zinc-400" />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-500/10 flex items-center justify-center gap-1.5 mt-2 disabled:opacity-50 transition-all hover:scale-[1.01]"
                >
                  <span>{loading ? 'Sending Recovery Link...' : 'Send Recovery Link'}</span>
                  {!loading && <ArrowRight size={14} />}
                </Button>
              </form>
            )}

            {!sent && (
              <div className="text-xs text-center border-t border-zinc-200/50 pt-4 text-zinc-500 font-medium">
                Remember your password?{' '}
                <a href="/auth/login" className="text-[#4f46e5] font-bold hover:underline">Sign in</a>
              </div>
            )}
          </Card>

        </div>
      </div>
    </div>
  );
}
