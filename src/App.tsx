import React, { useState } from "react";
import "./App.css";
import { Admin, MainPage } from "./components";
import { Route, Switch } from "react-router-dom";
import { config } from "./config";

function App() {
  const [authToken, setToken] = useState("");

  return (
    <div className="App">
      <div className="header">
        <div className="header__logo">{config.name}</div>
        {authToken && (
          <button className="header__logout" onClick={() => setToken("")}>
            log out
          </button>
        )}
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
