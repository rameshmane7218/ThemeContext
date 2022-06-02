import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequireAuth = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: pathname }} replace />;
  }
};

export default RequireAuth;
