import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { Lock, Unlock, KeyRound, AlertCircle, X } from 'lucide-react';

interface AdminLockModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLockModal: React.FC<AdminLockModalProps> = ({ isOpen, onClose }) => {
  const { loginAdmin } = usePrep();
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setPin('');
      setError(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(pin);
    if (success) {
      setError(false);
      setPin('');
      onClose();
    } else {
      setError(true);
    }
  };

  const handleDigitClick = (digit: string) => {
    if (pin.length < 8) {
      setPin(prev => prev + digit);
      setError(false);
    }
  };

  const handleDeleteDigit = () => {
    setPin(prev => prev.slice(0, -1));
    setError(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-sm rounded-2xl border border-blue-500/30 bg-[#121318] p-6 shadow-2xl shadow-blue-500/10 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1e2029] pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30">
              <KeyRound className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-outfit">Owner Authentication</h3>
              <p className="text-[10px] text-zinc-400 font-mono">Unlock full editing controls</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* PIN Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-zinc-300 text-center mb-2">
              Enter Owner PIN
            </label>
            <input
              type="password"
              maxLength={8}
              value={pin}
              autoFocus
              onChange={(e) => {
                setPin(e.target.value);
                setError(false);
              }}
              placeholder="••••"
              className="w-full rounded-xl bg-[#09090b] border border-[#1e2029] p-3 text-center text-2xl font-mono tracking-widest text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          {error && (
            <div className="flex items-center justify-center gap-1.5 rounded-lg bg-rose-500/10 p-2 text-xs font-mono text-rose-400 border border-rose-500/20">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>Incorrect PIN. Access restricted.</span>
            </div>
          )}

          {/* Quick Keypad */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(d => (
              <button
                key={d}
                type="button"
                onClick={() => handleDigitClick(d)}
                className="rounded-lg bg-[#09090b] hover:bg-[#1a1c26] text-white font-mono text-sm py-2.5 border border-[#1e2029] transition-colors"
              >
                {d}
              </button>
            ))}
            <button
              type="button"
              onClick={handleDeleteDigit}
              className="rounded-lg bg-[#09090b] hover:bg-[#1a1c26] text-zinc-400 font-mono text-xs py-2.5 border border-[#1e2029] transition-colors"
            >
              DEL
            </button>
            <button
              type="button"
              onClick={() => handleDigitClick('0')}
              className="rounded-lg bg-[#09090b] hover:bg-[#1a1c26] text-white font-mono text-sm py-2.5 border border-[#1e2029] transition-colors"
            >
              0
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs py-2.5 transition-colors shadow-lg shadow-blue-600/30"
            >
              OK
            </button>
          </div>

          <div className="pt-2 text-center text-[10px] text-zinc-500 font-mono">
            Default public view is read-only to protect your progress stats.
          </div>
        </form>
      </div>
    </div>
  );
};
