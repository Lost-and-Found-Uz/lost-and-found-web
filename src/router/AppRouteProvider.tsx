import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import AppRoute from "./AppRoute";
import AuthRoute from "./AuthRoute";

const AppRouteProvider = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      dispatch({
        type: "loginUser",
        jwt: jwt,
      });
    }
  }, [dispatch]);

  return (
    <BrowserRouter>{state.jwt ? <AppRoute /> : <AuthRoute />}</BrowserRouter>
  );
};

export default AppRouteProvider;
