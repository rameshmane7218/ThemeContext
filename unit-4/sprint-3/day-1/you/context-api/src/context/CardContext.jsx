import React, { createContext, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const addToCart = ()=>{
      setCount(count + 1);
  }


  return (
    <CardContext.Provider value={{ count, addToCart }}>
      {children}
    </CardContext.Provider>
  );
};

// why we are using children
// -
