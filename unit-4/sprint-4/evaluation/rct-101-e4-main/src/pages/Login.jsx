import React from "react";
import styles from "./Login.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { signInAPI } from "../store/auth/auth.actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  // console.log("auth", data, loading, error);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(signInAPI(formData));
    navigate("/");
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div className={styles.fromDiv}>
      Login
      <form onSubmit={handleOnSubmit}>
        <input
          data-cy="login-email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
        />
        <input
          data-cy="login-password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
        />
        <button data-cy="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
