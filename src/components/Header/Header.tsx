import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { config } from "../../config";

interface HeaderProps {
  authToken: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  cartCount: number;
}

export function Header({ authToken, setToken, cartCount }: HeaderProps) {
  const history = useHistory();

  function logout() {
    document.cookie = "token=; max-age=-1";
    setToken("");
  }

  return (
    <div className="header">
      <button className="header__name" onClick={() => history.push("/")}>
        {config.name}
      </button>

      <button className={`header__btn ${!authToken && "header__btn_hidden"}`} onClick={logout}>
        log out
      </button>
      <button className="header__btn" onClick={() => history.push("/admin")}>
        admin
      </button>

      <button className="header__cart" onClick={() => history.push("/cart")}>
        {cartCount || ""}&nbsp;&nbsp;
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
}
