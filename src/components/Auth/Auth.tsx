import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Auth.css";
import { login } from "../../middleware";
import { ProductWithId } from "../../data/shared";

interface AuthProps {
  setToken: (token: string) => void;
}

export function Auth({ setToken }: AuthProps) {
  const loginInput: React.MutableRefObject<null | HTMLInputElement> = useRef(null);
  const passwordInput: React.MutableRefObject<null | HTMLInputElement> = useRef(null);
  const history = useHistory();

  async function onAuth(): Promise<void> {
    const username = loginInput!.current!.value;
    const password = passwordInput!.current!.value;
    if (!login) return;

    const token = await login(username, password);

    if (!token) {
      prompt("Ты уебан?");
      return;
    }
    document.cookie = `token=${token}`;
    setToken(token);
  }

  return (
    <div className="auth">
      <input
        ref={loginInput}
        id="login"
        className="auth__input"
        placeholder="login"
        autoFocus={true}
      />
      <input ref={passwordInput} id="password" type="password" className="auth__input" placeholder="password" />

      <div className="auth__buttons">
        <button className="auth__button auth__button_solid" onClick={onAuth}>
          Auth
        </button>
        <button className="auth__button auth__button_transparent" onClick={() => history.push("/")}>
          Cancel
        </button>
      </div>
    </div>
  );
}
