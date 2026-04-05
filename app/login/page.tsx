"use client";

import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const ok = await login(email, password);
    if (!ok) {
      setError("Invalid email or password. Try sarah@school.fr / teacher123");
      setLoading(false);
    }
  };

  const quickLogin = (e: string, p: string) => {
    setEmail(e);
    setPassword(p);
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#cba6f7] to-[#89b4fa] mb-4">
            <span className="text-3xl">🎓</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Agentic TP
          </h1>
          <p className="text-[#6c7086] mt-1">AI-powered learning platform</p>
        </div>

        {/* Card */}
        <div className="bg-[#181825] rounded-2xl border border-[#313244] p-8 shadow-2xl">
          <h2 className="text-xl font-semibold text-white mb-6">Sign in</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-[#a6adc8] mb-1.5">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#1e1e2e] border border-[#313244] rounded-xl px-4 py-3 text-white placeholder:text-[#45475a] outline-none focus:border-[#cba6f7] focus:ring-1 focus:ring-[#cba6f7] transition-colors"
                placeholder="you@school.fr"
              />
            </div>
            <div>
              <label className="block text-sm text-[#a6adc8] mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#1e1e2e] border border-[#313244] rounded-xl px-4 py-3 text-white placeholder:text-[#45475a] outline-none focus:border-[#cba6f7] focus:ring-1 focus:ring-[#cba6f7] transition-colors"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-sm text-[#f38ba8] bg-[#f38ba8]/10 border border-[#f38ba8]/20 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#cba6f7] to-[#89b4fa] text-[#1a1a2e] font-bold text-base hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        {/* Quick login for demo */}
        <div className="mt-6 bg-[#181825] rounded-2xl border border-[#313244] p-5">
          <p className="text-xs text-[#6c7086] uppercase tracking-widest mb-3">
            Demo accounts
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => quickLogin("sarah@school.fr", "teacher123")}
              className="text-left p-3 rounded-xl bg-[#1e1e2e] hover:bg-[#313244] transition-colors border border-[#313244]"
            >
              <p className="text-xs text-[#cba6f7] font-mono">TEACHER</p>
              <p className="text-sm text-white font-medium mt-0.5">
                Prof. Sarah
              </p>
              <p className="text-xs text-[#45475a]">sarah@school.fr</p>
            </button>
            <button
              onClick={() => quickLogin("alice@school.fr", "student123")}
              className="text-left p-3 rounded-xl bg-[#1e1e2e] hover:bg-[#313244] transition-colors border border-[#313244]"
            >
              <p className="text-xs text-[#89b4fa] font-mono">STUDENT</p>
              <p className="text-sm text-white font-medium mt-0.5">
                Alice Martin
              </p>
              <p className="text-xs text-[#45475a]">alice@school.fr</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
