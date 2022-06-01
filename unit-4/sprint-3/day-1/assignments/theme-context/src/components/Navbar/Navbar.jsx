import React from "react";
import "../../App.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme, toggleTheme);
  return (
    <div className="navbar">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3063/3063792.png"
          alt=""
        />
      </div>
      <div
        className="themeBtn"
        onClick={() => toggleTheme()}
        title="Change Theme"
      >
        <i
          className={`fa-solid ${theme === "light" ? "fa-moon" : "fa-sun"}`}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
