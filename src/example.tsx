import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "./components/ErrorBoundary";
import * as React from "react";
import { ErrorViewVariants } from "./components/ErrorView";
const App = () => {
  const [variant, setVariant] = React.useState<ErrorViewVariants>("windows9x");
  return (
    <ErrorBoundary variant={variant}>
      <h1>React-BlueScreen</h1>
      <hr />
      <ErrorButton></ErrorButton>
      <h2>Theme</h2>
      <select
        name="options"
        onChange={(e) => setVariant(e.target.value as any)}
        value={variant}
      >
        <option value="windows">windows</option>
        <option value="windows9x">windows9x</option>
        <option value="macOS">macOS</option>
      </select>
    </ErrorBoundary>
  );
};
const ErrorButton = () => {
  const [error, setError] = React.useState<Error | undefined>(undefined);
  React.useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);
  return (
    <button
      onClick={() => {
        setError(new Error("useEffect"));
      }}
    >
      throw Error
    </button>
  );
};
window.addEventListener("DOMContentLoaded", () => {
  const mountNode = document.getElementById("root");
  if (!mountNode) {
    throw new Error("#root element is not found");
  }
  const root = createRoot(mountNode);
  root.render(<App />);
});
