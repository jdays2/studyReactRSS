import React from 'react';
import { Home } from './pages/Home';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

export class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Home />;
      </ErrorBoundary>
    );
  }
}
