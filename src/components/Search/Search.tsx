import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchProps {
  inputEmitter: (value: string) => void;
}

export function Search({ inputEmitter }: SearchProps) {
  const { t } = useTranslation();

  return (
    <div className="search">
      <span className="search__title">
        <FontAwesomeIcon icon={faSearch} />
        &nbsp;&nbsp;{t("search")}
      </span>

      <input className="search__field" onChange={event => inputEmitter(event.target.value)}
      />
    </div>
  );
}
