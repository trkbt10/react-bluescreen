import * as React from "react";
import { ErrorView } from "./ErrorView";
export declare class ErrorBoundary extends React.Component<React.PropsWithChildren<Pick<React.ComponentProps<typeof ErrorView>, "variant">>> {
    readonly state: {
        errorInfo?: React.ErrorInfo;
        error?: Error;
    };
    constructor(props: React.PropsWithChildren<{}>);
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    onConfirm(): void;
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void;
    render(): string | number | boolean | JSX.Element | React.ReactFragment | null | undefined;
}
//# sourceMappingURL=ErrorBoundary.d.ts.map