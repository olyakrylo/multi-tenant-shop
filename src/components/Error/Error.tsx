import React from "react";
import "./Error.css";

interface ErrorProps {
  message: string;
  show: boolean;
  setError: (arg: string) => void;
}

export function Error({ message, show, setError }: ErrorProps) {
  return (
    <div className={`error ${show && "error_show"}`}>
      <div className="error__container">
        <div className="error__message">{ message }</div>
        <button className="error__button" onClick={() => setError("")}>OK</button>
      </div>
    </div>
  )
}