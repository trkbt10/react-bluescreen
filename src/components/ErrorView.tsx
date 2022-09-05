import * as React from "react";
import { ErrorState } from "../interfaces";
import { ErrorViewMacOS } from "./ErrorViewMacOS";
import { ErrorViewWindows10 } from "./ErrorViewWindows10";
import { ErrorViewWindows9x } from "./ErrorViewWindows9x";
export type ErrorViewVariants = "macOS" | "windows" | "windows9x";
export const ErrorView: React.FC<
  React.PropsWithChildren<
    {
      onConfirm: () => void;
      variant?: ErrorViewVariants;
    } & ErrorState
  >
> = ({ error, errorInfo, onConfirm, variant }) => {
  React.useEffect(() => {
    const onBlur = (e: KeyboardEvent) => {
      e.key === "Enter" && onConfirm();
    };
    window.addEventListener("keypress", onBlur, { once: true });
  }, []);
  const errorViewType = React.useMemo(() => {
    if (variant) {
      return variant;
    }
    if (window.navigator.userAgent.includes("Windows")) {
      return "windows";
    }
    return "windows9x";
  }, [variant]);
  switch (errorViewType) {
    case "macOS": {
      return <ErrorViewMacOS error={error} errorInfo={errorInfo} />;
    }
    case "windows9x": {
      return <ErrorViewWindows9x error={error} errorInfo={errorInfo} />;
    }
  }
  return (
    <ErrorViewWindows10
      error={error}
      errorInfo={errorInfo}
    ></ErrorViewWindows10>
  );
};
ErrorView.displayName = "BlueScreen";
