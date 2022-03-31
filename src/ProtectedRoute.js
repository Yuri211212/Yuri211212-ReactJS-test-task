import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";

//created ProtectedRoute, which is avaliable only for authorized users
//and redirects others to /login
const ProtectedRoute = (props) => {
  const location = useLocation();
  const { authenticated } = useAuth();
  const url = new URLSearchParams();
  url.set("redirect", location.pathname + location.search);

  if (!authenticated) {
    return (
      <Navigate
        to={{
          pathname: "/login",
          search: url.toString()
        }}
      />
    );
  }

  return props.children;
};

export default ProtectedRoute;
