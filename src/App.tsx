import React from "react";
import "./App.css";
import { Admin, MainPage } from "./components";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header__logo">Logo</div>
      </div>

      <div className="content">
        <Switch>
          <Route exact path="/" render={() => <MainPage />} />
          <Route exact path="/admin" render={() => <Admin />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;