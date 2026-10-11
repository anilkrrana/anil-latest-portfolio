import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught rendering error:', error, errorInfo);
  }

  private handleReset = () => {
    try {
      localStorage.removeItem('infosys_sp_crack_system_v1');
    } catch (e) {
      console.error(e);
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-xl border border-red-500/30 bg-[#121318] p-6 text-center text-zinc-200 space-y-4 my-4">
          <div className="inline-flex p-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-400">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-outfit">
              {this.props.fallbackTitle || 'Component Rendering Error'}
            </h3>
            <p className="mt-1 text-xs text-zinc-400 font-mono max-w-md mx-auto">
              {this.state.error?.message || 'An unexpected error occurred while rendering this section.'}
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#1e2029] bg-[#1a1c24] px-3 py-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-white transition-all"
            >
              Retry
            </button>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 px-3.5 py-1.5 text-xs font-mono font-semibold text-white transition-all shadow-sm"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reset Local Cache & Reload</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
