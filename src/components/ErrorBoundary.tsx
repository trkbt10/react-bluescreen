import * as React from "react";
import { ErrorView } from "./ErrorView";
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<
    Pick<React.ComponentProps<typeof ErrorView>, "variant">
  >
> {
  readonly state: {
    errorInfo?: React.ErrorInfo;
    error?: Error;
  };
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  public onConfirm() {
    this.setState({ error: undefined, errorInfo: undefined });
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ errorInfo, error });
  }
  render() {
    if (this.state.error) {
      return (
        <ErrorView
          error={this.state.error}
          errorInfo={this.state.errorInfo}
          onConfirm={this.onConfirm.bind(this)}
          variant={this.props.variant}
        ></ErrorView>
      );
    }
    return this.props.children;
  }
}
