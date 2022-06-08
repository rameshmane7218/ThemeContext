import axios from "axios";
import { createContext, useState } from "react";

export const FetchContext = createContext();

export const FetchContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getData = async (category) => {
    let res = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    // console.log(res);
    // console.log(res.data);
    setProducts(res.data);
  };

  return (
    <FetchContext.Provider value={{ getData, products }}>
      {children}
    </FetchContext.Provider>
  );
};
