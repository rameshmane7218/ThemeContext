import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    //login screen
    if (isAuth) {
      //he wants to Logout
      logout();
      // navigate("/");
    } else {
      //he wants to Login
      navigate("/login");
    }
  };
  return (
    <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
      Navbar:
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/feeds">Feed</Link>
      {/* {isAuth && <Link to='/posts' >Posts</Link>}
        {isAuth && <Link to='/careers' >Careers</Link>}
        {isAuth && <Link to='/feeds' >Feed</Link>} */}
      <button onClick={handleLoginClick}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
