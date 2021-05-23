import React from "react";
import { Redirect, Route, Switch } from "react-router";
import NotFound from "../pages/404/NotFound";
import ChatsPage from "../pages/App/ChatsPage/ChatsPage";
import Found from "../pages/App/Found/Found";
import Home from "../pages/App/Home/Home";
import Lost from "../pages/App/Lost/Lost";
import Profile from "../pages/App/Profile/Profile";
import ChatPage from "../pages/App/ChatPage/ChatPage";

const AppRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/lost" component={Lost} />
      <Route path="/found" component={Found} />
      <Route path="/chats" component={ChatsPage} />
      <Route path="/chat/:id" component={ChatPage} />
      <Route path="/profile" component={Profile} />
      <Route path="/404" component={NotFound} />
      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
};

export default AppRoute;
