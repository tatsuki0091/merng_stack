import React, { useContext } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth";
import Login from "../pages/Login";

function AuthRoute() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (user) return <Navigate state={{ from: location }} to="/" />;
  return <Outlet />;
}

export default AuthRoute;
