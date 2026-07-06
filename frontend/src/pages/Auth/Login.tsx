import React, { useState } from 'react';
import { Button, Card } from '../../components/ui';
import { Sparkles, Mail, Lock, AlertCircle, ArrowRight, CheckSquare, Eye, EyeOff } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import BrandPanel from './BrandPanel';
import logoImg from '../../assets/logo/Axivon-logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const loginBackend = useAuthStore((state) => state.loginBackend);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all credentials fields.');
      return;
    }

    setLoading(true);
    try {
      await loginBackend(email, password);
      window.location.href = '/';
    } catch (err: any) {
      const errMsg = err?.response?.data?.message || 'Failed to authenticate. Please check your database server.';
      setError(errMsg);
    } finally {
      setLoading(false);
    }
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
              <h2 className="text-2xl font-black text-zinc-950 tracking-tight">Welcome back</h2>
              <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">Sign in to access your corporate tenant dashboard and database registry.</p>
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-rose-50 text-rose-600 text-xs font-bold p-3.5 rounded-xl border border-rose-100/50 animate-shake">
                <AlertCircle size={14} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

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

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Password</label>
                  <a href="/auth/forgot" className="text-[10px] text-[#4f46e5] font-bold hover:underline">Forgot password?</a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    disabled={loading}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/70 border border-zinc-200 rounded-xl pl-10 pr-10 py-2.5 text-xs text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-500/10 transition-all disabled:opacity-50"
                  />
                  <Lock size={14} className="absolute left-3.5 top-3.5 text-zinc-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3.5 text-zinc-400 hover:text-zinc-600 outline-none"
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>

              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-500/10 flex items-center justify-center gap-1.5 mt-2 disabled:opacity-50 transition-all hover:scale-[1.01]"
              >
                <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
                {!loading && <ArrowRight size={14} />}
              </Button>
            </form>

            <div className="text-xs text-center border-t border-zinc-200/50 pt-4 text-zinc-500 font-medium">
              Don't have an account?{' '}
              <a href="/auth/register" className="text-[#4f46e5] font-bold hover:underline">Create account</a>
            </div>
          </Card>

        </div>
      </div>

    </div>
  );
}
