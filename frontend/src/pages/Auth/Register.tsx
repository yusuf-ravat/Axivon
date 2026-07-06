import React, { useState } from 'react';
import { Button, Card } from '../../components/ui';
import { Sparkles, Mail, Lock, User, AlertCircle, ArrowRight, CheckSquare, Eye, EyeOff } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import BrandPanel from './BrandPanel';
import logoImg from '../../assets/logo/Axivon-logo.png';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const registerBackend = useAuthStore((state) => state.registerBackend);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('Please fill in all input fields.');
      return;
    }

    if (password.length < 6 || !/\d/.test(password) || !/[A-Z]/.test(password)) {
      setError('Password must meet all requirement criteria.');
      return;
    }

    setLoading(true);
    try {
      await registerBackend(name, email, password);
      window.location.href = '/';
    } catch (err: any) {
      const errMsg = err?.response?.data?.message || 'Failed to register account. Please check your database server.';
      setError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const hasMinLength = password.length >= 6;
  const hasNumber = /\d/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const isPasswordDirty = password.length > 0;

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
              <h2 className="text-2xl font-black text-zinc-950 tracking-tight">Create your account</h2>
              <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">Sign up to access all the advanced CRM tools and AI telemetry.</p>
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-rose-50 text-rose-600 text-xs font-bold p-3.5 rounded-xl border border-rose-100/50 animate-shake">
                <AlertCircle size={14} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    disabled={loading}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/70 border border-zinc-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-zinc-800 placeholder:text-zinc-400 outline-none focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-500/10 transition-all disabled:opacity-50"
                  />
                  <User size={14} className="absolute left-3.5 top-3.5 text-zinc-400" />
                </div>
              </div>

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
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Password</label>
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

                {isPasswordDirty && (
                  <div className="flex flex-col gap-1 mt-1 p-3 bg-zinc-50 border border-zinc-100 rounded-xl animate-fade-in">
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Password Requirements</span>
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${hasMinLength ? 'bg-emerald-500' : 'bg-zinc-300'}`} />
                      <span className={`transition-colors duration-300 ${hasMinLength ? 'text-emerald-600 font-bold' : 'text-zinc-400'}`}>At least 6 characters</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${hasNumber ? 'bg-emerald-500' : 'bg-zinc-300'}`} />
                      <span className={`transition-colors duration-300 ${hasNumber ? 'text-emerald-600 font-bold' : 'text-zinc-400'}`}>Contains a number</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${hasUppercase ? 'bg-emerald-500' : 'bg-zinc-300'}`} />
                      <span className={`transition-colors duration-300 ${hasUppercase ? 'text-emerald-600 font-bold' : 'text-zinc-400'}`}>Contains an uppercase letter</span>
                    </div>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-500/10 flex items-center justify-center gap-1.5 mt-2 disabled:opacity-50 transition-all hover:scale-[1.01]"
              >
                <span>{loading ? 'Creating Account...' : 'Sign Up'}</span>
                {!loading && <ArrowRight size={14} />}
              </Button>
            </form>

            <div className="text-xs text-center border-t border-zinc-200/50 pt-4 text-zinc-500 font-medium">
              Already have an account?{' '}
              <a href="/auth/login" className="text-[#4f46e5] font-bold hover:underline">Log in</a>
            </div>
          </Card>

        </div>
      </div>

    </div>
  );
}
