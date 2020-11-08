import React, { useState } from "react";
import "./App.css";
import { Admin, MainPage } from "./components";
import { Route, Switch, useHistory } from "react-router-dom";
import { config } from "./config";

function App() {
  const [authToken, setToken] = useState("a");
  const history = useHistory();

  function getHeaderButton() {
    return authToken ? (
      <button className="header__admin-btn" onClick={() => setToken("")}>
        log out
      </button>
    ) : (
      <button className="header__admin-btn" onClick={() => history.push("/admin")}>
        admin
      </button>
    );
  }

  return (
    <div className="App">
      <div className="header">
        <div className="header__logo">{config.name}</div>
        {getHeaderButton()}
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
