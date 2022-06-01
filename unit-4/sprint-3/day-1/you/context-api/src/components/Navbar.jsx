import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Wishlist from "./Wishlist";

const Navbar = () => {
  // const {isAuthorized} = useContext(AuthContext);
  const { isLight, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      {/* <button>{isAuthorized?"logout":"login"}</button> */}
      <button onClick={toggleTheme}>
        `Make ${isLight ? "dark" : "light"}`
      </button>
      <Wishlist />
    </div>
  );
};

export default Navbar;
