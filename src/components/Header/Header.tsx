import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { config } from "../../config";

interface HeaderProps {
  pathname: string;
  setPathname: React.Dispatch<React.SetStateAction<string>>;
  authToken: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  cartCount: number;
  goToPath: (path: string) => void;
}

export function Header({
  pathname,
  authToken,
  setToken,
  cartCount,
  goToPath,
}: HeaderProps) {
  function logout() {
    document.cookie = "token=; max-age=-1";
    setToken("");
  }

  return (
    <div className="header">
      <button className="header__name" onClick={() => goToPath("/")}>
        {config.name}
      </button>
      {authToken && (
        <button className="header__btn" onClick={logout}>
          log out
        </button>
      )}
      <button className="header__btn" onClick={() => goToPath("/admin")}>
        admin
      </button>
      {pathname !== "/admin" && (
        <button className="header__cart" onClick={() => goToPath("/cart")}>
          {cartCount || ""}&nbsp;&nbsp;
          <FontAwesomeIcon icon={faShoppingCart} />
          &nbsp;&nbsp;Cart
        </button>
      )}
    </div>
  );
}
