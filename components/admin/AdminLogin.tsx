import React, { useState } from 'react';
import { Cpu, Lock } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
  onCancel: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onCancel }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '111') {
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl">
      <div className="w-full max-w-md p-8 glass-liquid rounded-3xl border border-white/10 relative">
        <button onClick={onCancel} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">✕</button>
        
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 glass-liquid rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(6,182,212,0.2)] border border-cyan-500/30">
            <Cpu className="text-cyan-400 w-10 h-10" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white tracking-widest">SYSTEM ACCESS</h2>
          <p className="text-cyan-500 font-mono text-xs tracking-[0.3em] mt-2">RESTRICTED AREA</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <Lock className="absolute left-4 top-3.5 text-gray-500 w-5 h-5 group-focus-within:text-cyan-500 transition-colors" />
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-cyan-500 focus:outline-none focus:bg-white/5 transition-all font-mono tracking-widest"
              placeholder="ENTER PASSCODE"
              autoFocus
            />
          </div>
          
          {error && <p className="text-red-500 text-xs font-mono text-center animate-pulse">ACCESS DENIED: INVALID PASSCODE</p>}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] uppercase tracking-wider font-display transform hover:scale-[1.02]"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;