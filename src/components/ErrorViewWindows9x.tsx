import * as React from "react";
import style from "./windows9x.module.css";
import type { ErrorState } from "../interfaces";

export const ErrorViewWindows9x: React.FC<ErrorState> = ({
  error,
  errorInfo,
}) => {
  const errorText = React.useMemo(() => {
    return errorInfo?.componentStack;
  }, [errorInfo]);
  return (
    <div className={style.errorViewWindows9x}>
      <div className={style.body}>
        <h1 className={style.heading}>ERROR</h1>
        <p>An error has occureed. To continue:</p>
        <p>Press Enter to return to Website, or</p>
        <p>
          Press Alt+F4 to close this application. If you do this, you will lose
          any unsaved information in all open applications.
        </p>
        <p>
          Error: {error?.name},{error?.message}
        </p>
        {errorText && <p>{errorText}</p>}
      </div>
    </div>
  );
};
