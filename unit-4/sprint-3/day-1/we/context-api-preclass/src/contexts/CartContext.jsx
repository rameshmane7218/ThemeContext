import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const handleCartUpdate = (value) => {
    setCartCount(cartCount + value);
  };
  return (
    <CartContext.Provider value={{ cartCount, handleCartUpdate }}>
      {children}
    </CartContext.Provider>
  );
};
