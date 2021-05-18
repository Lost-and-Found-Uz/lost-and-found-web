import { Route, Switch } from "react-router";
import About from "../pages/Auth/About/About";
import AuthHome from "../pages/Auth/AuthHome/AuthHome";
import Contact from "../pages/Auth/Contact/Contact";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Terms from "../pages/Auth/Terms/Terms";

const AuthRoute = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/contact" component={Contact} />
      <Route path="/terms" component={Terms} />
      <Route path="/about" component={About} />
      <Route path="/" component={AuthHome} />
    </Switch>
  );
};

export default AuthRoute;
