import React, { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const login = (username, password) => {
    console.log(username, password);
    if (username && password) {
      setIsAuthorized(true);
    }
  };

  const logout = () => {
    setIsAuthorized(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthorized, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
