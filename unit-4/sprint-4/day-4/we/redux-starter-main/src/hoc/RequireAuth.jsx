import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const requireAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  const from = {
    pathname: location.pathmane,
  };

  if (isAuth) return children;
  return <Navigate to="/login" state={from} replace />;
};

export default requireAuth;
