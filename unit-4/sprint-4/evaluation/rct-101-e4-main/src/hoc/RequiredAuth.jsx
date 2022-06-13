import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const RequiredAuth = ({ children }) => {
  const { data } = useSelector((state) => state.auth);
  const location = useLocation();

  // console.log(data.isAuthenticated, "userData")
  const from = {
    pathname: location.pathname,
  };
  
  if (!data.isAuthenticated) {
    return <Navigate to="/login" state={from} replace />;
  }
  return children;
};

export default RequiredAuth;
