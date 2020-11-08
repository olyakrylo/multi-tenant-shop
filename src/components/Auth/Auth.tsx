import React from "react";
import "./Auth.css";
import { useHistory } from "react-router-dom";

interface AuthProps {
  setToken: (token: string) => void;
}

export function Auth({ setToken }: AuthProps) {
  const history = useHistory();

  function onAuth(): void {
    // @ts-ignore
    const login = document.querySelector("#login").value;
    setToken(login);
  }

  return (
    <form className="auth">
      <input id="login" className="auth__input" placeholder="login" autoFocus={true} />
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
