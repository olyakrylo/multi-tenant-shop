import React, { useState } from "react";
import "./App.css";
import { Admin, MainPage } from "./components";
import { Route, Switch, useHistory } from "react-router-dom";
import { config } from "./config";

function App() {
  const [authToken, setToken] = useState(getToken());
  const history = useHistory();
  const [pathname, setPathName] = useState(history.location.pathname);

  function getToken() {
    const tokenExpr = document.cookie.match(/token=[a-zA-Z0-9]+;?/);
    if (!tokenExpr) return "";
    return tokenExpr[0].slice(6);
  }

  function goToPath(path: string) {
    setPathName(path);
    history.push(path);
  }

  function getHeaderButtons() {
    return (
      <div>
        {authToken && (
          <button className="header__btn" onClick={logout}>
            log out
          </button>
        )}
        {pathname === "/admin" ? (
          <button className="header__btn" onClick={() => goToPath("/")}>
            main
          </button>
        ) : (
          <button className="header__btn" onClick={() => goToPath("/admin")}>
            admin
          </button>
        )}
      </div>
    );
  }

  function logout() {
    document.cookie = "token=; max-age=-1";
    setToken("");
  }

  return (
    <div className="App">
      <div className="header">
        <div className="header__logo">{config.name}</div>
        {getHeaderButtons()}
      </div>

      <div className="content">
        <Switch>
          <Route exact path="/" render={() => <MainPage />} />
          <Route
            exact
            path="/admin"
            render={() => <Admin token={authToken} setToken={setToken} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
