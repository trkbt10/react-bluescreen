import * as React from "react";
import { ErrorState } from "../interfaces";
import style from "./macOS.module.css";
export const ErrorViewMacOS: React.FC<ErrorState> = ({ error, errorInfo }) => {
  return (
    <div className={style.errorView}>
      <div className={style.body}>
        <p>{error?.name}</p>
        <p>{error?.message}</p>
        <>
          {error?.stack?.split("\n").map((line, i) => {
            return <p key={i}>{line}</p>;
          })}
        </>
        <p>{errorInfo?.componentStack}</p>
      </div>
    </div>
  );
};
ErrorViewMacOS.displayName = "ErrorViewMacOS";
