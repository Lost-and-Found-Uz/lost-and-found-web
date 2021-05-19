import React from "react";
import { Redirect, Route, Switch } from "react-router";
import NotFound from "../pages/404/NotFound";
import Home from "../pages/App/Home";

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
};

export default AppRoute;
