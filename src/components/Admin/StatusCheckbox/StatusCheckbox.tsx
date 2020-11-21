import React from "react";
import "./StatusCheckbox.css";
import { useTranslation } from "react-i18next";

interface StatusCheckboxProps {
  available: boolean;
  setAvailable: React.Dispatch<React.SetStateAction<boolean>>;
}

export function StatusCheckbox({ available, setAvailable }: StatusCheckboxProps) {
  const { t } = useTranslation();

  return (
    <div className="status">
      <div
        className={`status__option ${available && "status__option_selected_green"}`}
        onClick={() => setAvailable(true)}
      >
        {t("product.available")}
      </div>
      <div
        className={`status__option ${!available && "status__option_selected_red"}`}
        onClick={() => setAvailable(false)}
      >
        {t("product.not_available")}
      </div>
    </div>
  );
}
