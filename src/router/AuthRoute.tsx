import { Redirect, Route, Switch } from "react-router";
import NotFound from "../pages/404/NotFound";
import About from "../pages/Auth/About/About";
import AuthHome from "../pages/Auth/AuthHome/AuthHome";
import Contact from "../pages/Auth/Contact/Contact";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Terms from "../pages/Auth/Terms/Terms";

const AuthRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={AuthHome} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/contact" component={Contact} />
      <Route path="/terms" component={Terms} />
      <Route path="/about" component={About} />
      <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/404" component={NotFound} />
      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  );
};

export default AuthRoute;
