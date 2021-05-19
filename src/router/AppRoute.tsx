import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "../pages/App/Home";

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default AppRoute;
