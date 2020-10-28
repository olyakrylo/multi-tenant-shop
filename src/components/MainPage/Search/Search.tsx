import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface SearchProps {
  inputEmitter: (value: string) => void;
}

export function Search({ inputEmitter }: SearchProps) {
  return (
    <div className="search">
      <span className="search__title">
        <FontAwesomeIcon icon={faSearch} />
        &nbsp;&nbsp;search
      </span>
      <input className="search__field" onChange={event => inputEmitter(event.target.value)} />
    </div>
  );
}
