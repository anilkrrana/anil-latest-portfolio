import React, { useState } from 'react';
import { usePrep } from '../../context/PrepContext';
import { Settings as SettingsIcon, Download, Upload, RefreshCw, Sparkles, Database, ShieldAlert, Save, GitCommit, CheckCircle2 } from 'lucide-react';

export const Settings: React.FC = () => {
  const { state, exportData, importData, resetData, seedDemoData, isAdmin, syncStatus, syncToCodebase, lastSavedAt } = usePrep();
  const [importJson, setImportJson] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [copiedSnapshot, setCopiedSnapshot] = useState(false);
  const [codebaseSyncMsg, setCodebaseSyncMsg] = useState<string | null>(null);

  const handleCopySnapshot = () => {
    navigator.clipboard.writeText(JSON.stringify(state, null, 2));
    setCopiedSnapshot(true);
    setTimeout(() => setCopiedSnapshot(false), 3000);
  };

  const handleSyncToCodebase = async () => {
    const res = await syncToCodebase();
    setCodebaseSyncMsg(res.message);
    setTimeout(() => setCodebaseSyncMsg(null), 5000);
  };

  const handleImportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!importJson.trim()) return;

    const success = importData(importJson.trim());
    if (success) {
      setImportStatus('✓ Data successfully imported!');
      setImportJson('');
    } else {
      setImportStatus('❌ Invalid JSON data structure.');
    }
    setTimeout(() => setImportStatus(null), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = importData(content);
        if (success) {
          setImportStatus('✓ Backup file successfully restored!');
        } else {
          setImportStatus('❌ Failed to parse backup file.');
        }
        setTimeout(() => setImportStatus(null), 3000);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-[#1e2029] bg-[#121318] p-5">
        <div>
          <h2 className="text-xl font-bold text-white font-outfit flex items-center gap-2">
            <span>SETTINGS & DATA MANAGEMENT</span>
            <span className="rounded bg-zinc-800 px-2.5 py-0.5 text-xs font-mono text-zinc-300 border border-[#1e2029]">
              Data Portability
            </span>
          </h2>
          <p className="mt-1 text-xs text-zinc-400 font-inter">
            Export JSON backups, restore data, migrate to Supabase/PostgreSQL, or seed demo data.
          </p>
        </div>
      </div>

      {/* Codebase & Git Sync Card */}
      <div className="rounded-xl border border-blue-500/30 bg-[#121318] p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#1e2029] pb-3">
          <h3 className="text-base font-bold text-white font-outfit flex items-center gap-2">
            <GitCommit className="h-4 w-4 text-blue-400" />
            <span>Git & Codebase Persistence</span>
            <span className="text-xs font-mono text-zinc-400 font-normal">(`data/userPrepState.json`)</span>
          </h3>

          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-mono border ${
              syncStatus === 'saving'
                ? 'border-amber-500/30 bg-amber-500/10 text-amber-300'
                : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
            }`}>
              <span className={`h-1.5 w-1.5 rounded-full ${syncStatus === 'saving' ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`}></span>
              <span>{syncStatus === 'saving' ? 'Syncing...' : 'Synced to Project'}</span>
            </span>
            {lastSavedAt && (
              <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
                Last saved {lastSavedAt}
              </span>
            )}
          </div>
        </div>

        <p className="text-xs text-zinc-300 font-inter leading-relaxed">
          Your preparation data is saved to browser storage and auto-synced to <code className="text-blue-300 bg-blue-950/40 px-1 py-0.5 rounded font-mono text-[11px]">data/userPrepState.json</code> on your machine.
          Whenever you commit and push to GitHub, your actual progress travels with your code and is visible to everyone on your live site!
        </p>

        {codebaseSyncMsg && (
          <div className="flex items-center gap-2 rounded-lg border border-blue-500/40 bg-blue-950/40 px-3 py-2 text-xs font-mono text-blue-200">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>{codebaseSyncMsg}</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
          {isAdmin ? (
            <button
              onClick={handleSyncToCodebase}
              disabled={syncStatus === 'saving'}
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 font-mono"
            >
              <Save className="h-4 w-4" />
              <span>{syncStatus === 'saving' ? 'WRITING TO DISK...' : 'SAVE SNAPSHOT TO CODEBASE'}</span>
            </button>
          ) : (
            <div className="text-xs font-mono text-amber-400/80 bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2">
              🔒 Unlock Owner Mode in top header to sync changes to codebase.
            </div>
          )}

          <div className="rounded-lg bg-[#09090b] border border-[#1e2029] px-3 py-2 text-[11px] font-mono text-zinc-400 flex items-center gap-2">
            <span className="text-blue-400 font-bold">$</span>
            <span>git add data/userPrepState.json && git commit -m &quot;update prep progress&quot; && git push</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Export & Backup */}
        <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5 space-y-4">
          <h3 className="text-base font-bold text-white font-outfit flex items-center gap-2 border-b border-[#1e2029] pb-3">
            <Download className="h-4 w-4 text-blue-400" />
            <span>Export Local Backup (JSON)</span>
          </h3>

          <p className="text-xs text-zinc-400 font-inter">
            Download your complete preparation history as a formatted JSON artifact. This file can be imported back anytime or migrated directly into a backend database like PostgreSQL or Supabase.
          </p>

          <button
            onClick={exportData}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 font-mono"
          >
            <Download className="h-4 w-4" />
            <span>EXPORT BACKUP JSON</span>
          </button>
        </div>

        {/* Import & Restore */}
        <div className="rounded-xl border border-[#1e2029] bg-[#121318] p-5 space-y-4">
          <h3 className="text-base font-bold text-white font-outfit flex items-center gap-2 border-b border-[#1e2029] pb-3">
            <Upload className="h-4 w-4 text-emerald-400" />
            <span>Import & Restore Data</span>
          </h3>

          {isAdmin ? (
            <>
              {importStatus && (
                <div className="rounded bg-[#09090b] p-2 text-xs font-mono text-emerald-400 border border-emerald-500/20">
                  {importStatus}
                </div>
              )}

              <div className="space-y-3 text-xs font-mono">
                <div>
                  <label className="block text-zinc-400 mb-1">Upload Backup JSON File</label>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="w-full text-xs text-zinc-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-[#09090b] file:text-blue-400 file:font-semibold hover:file:bg-zinc-800"
                  />
                </div>

                <form onSubmit={handleImportSubmit} className="space-y-2 pt-2 border-t border-[#1e2029]">
                  <label className="block text-zinc-400">Or Paste JSON Content</label>
                  <textarea
                    rows={3}
                    placeholder="Paste backup JSON string here..."
                    value={importJson}
                    onChange={e => setImportJson(e.target.value)}
                    className="w-full rounded bg-[#09090b] border border-[#1e2029] p-2 text-xs text-white"
                  ></textarea>
                  <button
                    type="submit"
                    className="rounded bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500"
                  >
                    Restore JSON Data
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="rounded-lg bg-[#09090b] p-6 text-center border border-[#1e2029] space-y-2">
              <ShieldAlert className="h-6 w-6 text-amber-400 mx-auto" />
              <div className="text-xs font-mono text-white font-bold">Owner Access Required</div>
              <p className="text-[11px] text-zinc-400 font-inter">
                Database restore and overwrite capabilities are protected behind Owner PIN authentication.
              </p>
            </div>
          )}
        </div>

        {/* Demo Data & Reset */}
        <div className="md:col-span-2 rounded-xl border border-rose-500/20 bg-[#121318] p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-[#1e2029] pb-3">
            <h3 className="text-base font-bold text-white font-outfit flex items-center gap-2">
              <Database className="h-4 w-4 text-amber-400" />
              <span>Testing & System State Actions</span>
            </h3>
            {isAdmin && (
              <button
                onClick={handleCopySnapshot}
                className="rounded bg-blue-600/20 text-blue-300 border border-blue-500/30 px-3 py-1 text-xs font-mono font-medium hover:bg-blue-600 hover:text-white transition-all"
              >
                {copiedSnapshot ? '✓ Copied Snapshot JSON!' : 'Copy Live Snapshot JSON'}
              </button>
            )}
          </div>

          {isAdmin ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-[#09090b] p-4 border border-[#1e2029] space-y-2">
                <div className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-400" />
                  <span>Seed Sample Data</span>
                </div>
                <p className="text-xs text-zinc-400 font-inter">
                  Populate dashboard with sample problems, mock scores, and topic progress to preview full analytics visuals.
                </p>
                <button
                  onClick={seedDemoData}
                  className="rounded bg-amber-600/20 text-amber-300 border border-amber-500/30 px-4 py-2 text-xs font-bold hover:bg-amber-600 hover:text-white transition-all font-mono"
                >
                  SEED SAMPLE DEMO DATA
                </button>
              </div>

              <div className="rounded-lg bg-[#09090b] p-4 border border-[#1e2029] space-y-2">
                <div className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 text-rose-400" />
                  <span>Reset to Clean 0 State</span>
                </div>
                <p className="text-xs text-zinc-400 font-inter">
                  Clear all problems, mock tests, and activity to start fresh with 0 solves and real date countdown.
                </p>
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to reset all dashboard data to zero?')) {
                      resetData();
                    }
                  }}
                  className="rounded bg-rose-600/20 text-rose-300 border border-rose-500/30 px-4 py-2 text-xs font-bold hover:bg-rose-600 hover:text-white transition-all font-mono"
                >
                  RESET ALL DATA TO ZERO
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-lg bg-[#09090b] p-6 text-center border border-[#1e2029] space-y-2">
              <div className="text-xs font-mono text-zinc-400">
                🔒 System reset and data seeding actions are locked to prevent accidental state loss.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
