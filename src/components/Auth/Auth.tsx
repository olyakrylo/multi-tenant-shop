import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Auth.css";

interface AuthProps {
  setToken: (token: string) => void;
}

export function Auth({ setToken }: AuthProps) {
  const loginElement = useRef(null);
  const history = useHistory();

  function onAuth(): void {
    // @ts-ignore
    const login = loginElement.current.value;
    if (!login) return;

    document.cookie = `token=${login}`;
    setToken(login);
  }

  return (
    <form className="auth">
      <input
        ref={loginElement}
        id="login"
        className="auth__input"
        placeholder="login"
        autoFocus={true}
      />
      <input id="password" type="password" className="auth__input" placeholder="password" />

      <div className="auth__buttons">
        <button className="auth__button auth__button_solid" onClick={onAuth}>
          Auth
        </button>
        <button className="auth__button auth__button_transparent" onClick={() => history.push("/")}>
          Cancel
        </button>
      </div>
    </form>
  );
}
