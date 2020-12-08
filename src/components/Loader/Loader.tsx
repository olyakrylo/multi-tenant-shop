import React from "react";
import "./Loader.css";

export function Loader() {
  return (
    <div className="loader">
      <div className="loader__container">
        <svg viewBox="0 0 36 36" className="loader__bar">
          <circle
            className="loader__segment"
            cx="18"
            cy="18"
            r="15.91549430918954"
            strokeWidth="4"
            fill='transparent'
            strokeDasharray="80 20" />
        </svg>
      </div>
    </div>
  )
}