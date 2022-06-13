import {Navigate,useLocation} from 'react-router-dom' ;
import {useSelector } from "react-redux";

const RequiredAuth = ({ children }) => {
  const { data} = useSelector((state) => state.auth);
  const location = useLocation();

  // console.log(data.isAuthenticated, "userData")
  const from = {
    pathname: location.pathname,
  }
  if(data.isAuthenticated){
    // console.log("hii");
    return children;
  }else{
    return < Navigate to="/login" state={from} replace/>
  }
};

export default RequiredAuth;
