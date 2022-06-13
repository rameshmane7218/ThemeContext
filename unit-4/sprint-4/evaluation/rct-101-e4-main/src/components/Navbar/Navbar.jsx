import React from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from "../../store/auth/auth.actions";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.auth);

  const handleNavigate = () => {
    if (data.isAuthenticated) {
      dispatch(logoutAPI());
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  return (
    <div data-cy="navbar" className={styles.navbarDiv}>
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link to="/" data-cy="navbar-home-link">
          Logo
        </Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">Cart:</div>
        <button data-cy="navbar-login-logout-button" onClick={handleNavigate}>
          {data.isAuthenticated ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
