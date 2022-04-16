import * as React from "react";
export declare class ErrorBoundary extends React.Component<React.PropsWithChildren<{
    variant?: string;
}>> {
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
    render(): string | number | boolean | React.ReactFragment | JSX.Element | null | undefined;
}
