import * as React from "react";
import { ErrorState } from "../interfaces";
import style from "./windows10.module.css";

export const ErrorViewWindows10: React.FC<ErrorState> = ({
  error,
  errorInfo,
}) => {
  return (
    <div className={style.errorView}>
      <div className={style.body}>
        <h1 className={style.heading}>:(</h1>
        <p>
          A problem has occurred with the website and it needs to be reloaded.
        </p>
        <p>We just collect some Error information and then restart for you.</p>

        <div className={style.details}>
          <p>
            For more information on this issue and possible solutions, please
            visit the website:
            <a
              href="https://reactjs.org/docs/error-boundaries.html"
              target="_blank"
            >
              https://reactjs.org/docs/error-boundaries.html
            </a>
          </p>
          <p>
            {error?.name}
            {error?.message}
          </p>
          <p>{errorInfo?.componentStack}</p>
        </div>
      </div>
    </div>
  );
};
