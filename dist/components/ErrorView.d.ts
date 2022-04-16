import * as React from "react";
import { ErrorState } from "../interfaces";
export declare const ErrorView: React.FC<React.PropsWithChildren<{
    onConfirm: () => void;
    variant?: "macOS" | "windows" | "windows9x" | string;
} & ErrorState>>;
