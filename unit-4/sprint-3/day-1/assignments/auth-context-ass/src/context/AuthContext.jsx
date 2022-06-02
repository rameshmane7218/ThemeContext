import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

  const login = (tokan)=>{
      setIsAuth(true);
      navigate("/");
  }
  const logout = ()=>{
      setIsAuth(false);
      setToken(false);
      
  }
  return <AuthContext.Provider value={{token,setToken,isAuth,login,logout}}>{children}</AuthContext.Provider>;
};
