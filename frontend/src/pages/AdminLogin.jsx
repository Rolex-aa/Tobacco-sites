import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth/login';

export default function AdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { data } = await axios.post(API_URL, form);
      localStorage.setItem('adminToken', data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-6">
      <div className="max-w-md w-full bg-[#1e293b] rounded-[2.5rem] p-10 shadow-2xl border border-white/5">
        <div className="text-center mb-10">
          <div className="text-4xl mb-4">🔐</div>
          <h1 className="text-3xl font-black text-white tracking-tight">Admin Portal</h1>
          <p className="text-gray-400 mt-2">Sign in to manage your workshop</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-widest">Username</label>
            <input
              type="text"
              required
              className="w-full bg-[#0f172a] border-2 border-white/5 rounded-2xl px-6 py-4 text-white outline-none focus:border-nk-gold transition-all"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-widest">Password</label>
            <input
              type="password"
              required
              className="w-full bg-[#0f172a] border-2 border-white/5 rounded-2xl px-6 py-4 text-white outline-none focus:border-nk-gold transition-all"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          {error && <p className="text-red-400 text-sm text-center font-bold bg-red-400/10 py-3 rounded-xl">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-nk-gold text-[#0f172a] font-black py-5 rounded-2xl text-xl hover:bg-yellow-400 hover:-translate-y-1 active:scale-95 transition-all shadow-xl shadow-nk-gold/20 disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Enter Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}
