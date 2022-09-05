import * as React from "react";
import { ErrorState } from "../interfaces";
export declare type ErrorViewVariants = "macOS" | "windows" | "windows9x";
export declare const ErrorView: React.FC<React.PropsWithChildren<{
    onConfirm: () => void;
    variant?: ErrorViewVariants;
} & ErrorState>>;
//# sourceMappingURL=ErrorView.d.ts.map