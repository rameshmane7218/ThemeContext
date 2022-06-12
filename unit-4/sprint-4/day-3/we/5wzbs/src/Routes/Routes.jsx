import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { LoginPage } from "./LoginPage";

function Routes() {
  return (
    <>
      <div>
        <Link to="/">TASKS</Link>
        <Link to="/login">LOGIN</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route>
          <h3>Error</h3>
        </Route>
      </Switch>
    </>
  );
}

export { Routes };
