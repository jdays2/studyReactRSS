import React from 'react';

interface ErrorBoundaryProps {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    const componentStack =
      info.componentStack || 'No component stack available';
    this.logErrorToMyService(error, componentStack);
  }

  logErrorToMyService(error: Error, componentStack: string) {
    console.error('Logging error to service:', error, componentStack);
  }

  removeError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="bg-black flex items-center justify-center h-[900px] text-white">
            <div className="flex flex-col gap-3 m-auto items-center ">
              <div className="w-full h-full">
                <img src="/src/assets/gif/error.gif" alt="loading-gif" />
              </div>
              <h1 className="text-2xl text-center">Error! Something wrong!</h1>
              <button
                className="p-2 px-3 rounded opacity-15 border border-white w-fit cursor-pointer hover:opacity-100"
                onClick={this.removeError}
              >
                EXIT
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
