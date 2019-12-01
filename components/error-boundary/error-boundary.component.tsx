import React, { ReactElement } from "react";

export default class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.warn(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Dziwne, wcześniej działało...</h1>;
    }
    return this.props.children;
  }
}

interface State {
  hasError: boolean;
}

interface Props {
  children: ReactElement;
}
