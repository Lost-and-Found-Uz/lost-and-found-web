import React from "react";
import { Route, Switch } from "react-router";
import Home from "../pages/App/Home";

const AppRoute = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default AppRoute;
