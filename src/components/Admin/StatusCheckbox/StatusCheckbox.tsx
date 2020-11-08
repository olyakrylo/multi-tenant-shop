import React from "react";
import "./StatusCheckbox.css";

interface StatusCheckboxProps {
  available: boolean;
  setAvailable: React.Dispatch<React.SetStateAction<boolean>>;
}

export function StatusCheckbox({ available, setAvailable }: StatusCheckboxProps) {
  return (
    <div className="status">
      <div
        className={`status__option ${available && "status__option_selected_green"}`}
        onClick={() => setAvailable(true)}
      >
        Available
      </div>
      <div
        className={`status__option ${!available && "status__option_selected_red"}`}
        onClick={() => setAvailable(false)}
      >
        Not available
      </div>
    </div>
  );
}
