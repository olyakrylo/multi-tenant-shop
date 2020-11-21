import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Auth.css";
import { login } from "../../../middleware";
import {config } from "../../../config";

interface AuthProps {
  setToken: (token: string) => void;
  setError: (message: string) => void;
}

export function Auth({ setToken, setError }: AuthProps) {
  const loginInput: React.MutableRefObject<null | HTMLInputElement> = useRef(null);
  const passwordInput: React.MutableRefObject<null | HTMLInputElement> = useRef(null);
  const history = useHistory();
  const { t } = useTranslation();

  async function onAuth(): Promise<void> {
    const username = loginInput!.current!.value;
    const password = passwordInput!.current!.value;
    if (!login) return;

    const token = await login(username, password);

    if (!token) {
      setError("Wrong login or password");
      return;
    }
    document.cookie = `token=${token}; max-age=${config.login_time * 60}`;
    setToken(token);
  }

  return (
    <div className="auth">
      <input
        ref={loginInput}
        id="login"
        className="auth__input"
        placeholder={t("auth.login")}
        autoFocus={true}
      />
      <input
        ref={passwordInput}
        id="password"
        type="password"
        className="auth__input"
        placeholder={t("auth.password")}
      />

      <div className="auth__buttons">
        <button className="auth__button auth__button_solid" onClick={onAuth}>
          {t("auth.log_in")}
        </button>
        <button className="auth__button auth__button_transparent" onClick={() => history.push("/")}>
          {t("cancel")}
        </button>
      </div>
    </div>
  );
}
