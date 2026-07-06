import React from 'react';

interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center border border-red-200 bg-red-50 dark:bg-red-950/20 rounded">
          <h2 className="text-lg font-semibold text-red-800 dark:text-red-300">Something went wrong.</h2>
          <p className="text-sm text-red-600 dark:text-red-400 mt-1">Please reload the page or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
