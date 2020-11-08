import React from "react";
import "./Auth.css";

interface AuthProps {
  setToken: (token: string) => void;
}

export function Auth({ setToken }: AuthProps) {
  function onAuth(): void {
    // @ts-ignore
    const login = document.querySelector("#login").value;
    setToken(login);
  }

  return (
    <form className="auth">
      <input id="login" className="auth__input" placeholder="login" />
      <input id="password" type="password" className="auth__input" placeholder="password" />
      <button className="auth__submit" type="submit" onClick={onAuth}>
        Auth
      </button>
    </form>
  );
}
