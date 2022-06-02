import { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const {state} = useLocation();

  const login = () => {
    setIsAuth(true);
    if(state.from){
        navigate(state.from, {replace:true});
    }else{
        navigate("/");
    }
  };
  const logout = () => {
    setIsAuth(false);
    navigate("/");
  };
  //   let param = { isAuth:isAuth, login:login, logout:logout } //if key value is same them no need ot repeat it as like below.
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
