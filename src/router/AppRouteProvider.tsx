import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import AppRoute from "./AppRoute";
import AuthRoute from "./AuthRoute";

const AppRouteProvider = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    const user = localStorage.getItem("userId");

    if (user) {
      dispatch({
        type: "loginUser",
        id: user,
      });
    }
  }, [dispatch]);

  return (
    <BrowserRouter>{state.userId ? <AppRoute /> : <AuthRoute />}</BrowserRouter>
  );
};

export default AppRouteProvider;
