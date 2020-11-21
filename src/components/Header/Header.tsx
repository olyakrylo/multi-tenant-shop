import React, { ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import {  useTranslation } from "react-i18next";
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
  const { i18n, t } = useTranslation();
  const { languages } = config;

  function logout() {
    document.cookie = "token=; max-age=-1";
    setToken("");
  }

  async function changeLang(e: ChangeEvent): Promise<void> {
    //@ts-ignore
    const lang = e.nativeEvent.target.value;
    await i18n.changeLanguage(lang);
    document.cookie = `i18n=${lang};`;
  }

  return (
    <div className="header">
      <button className="header__name" onClick={() => history.push("/")}>
        {config.name}
      </button>

      <button className={`header__btn ${!authToken && "header__btn_hidden"}`} onClick={logout}>
        {t("auth.log_out")}
      </button>
      <button className="header__btn" onClick={() => history.push("/admin")}>
        {t("auth.admin")}
      </button>

      <button className="header__cart" onClick={() => history.push("/cart")}>
        {cartCount || ""}&nbsp;&nbsp;
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>

      <select className="header__lang" onChange={changeLang} defaultValue={i18n.language}>
        {languages.map((lang) => (
          <option
            value={lang.key}
            key={lang.key}
          >
            {lang.name}
          </option>
          ))}
      </select>
    </div>
  );
}
