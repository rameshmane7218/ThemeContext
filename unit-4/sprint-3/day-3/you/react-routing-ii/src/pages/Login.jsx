import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
  const { login } = useContext(AuthContext);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  // console.log(loginCreds);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("loginDetails:", loginCreds)

    login();
    // navigate("/feeds");
  };

  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          name="email"
          type="text"
          placeholder="email"
          onChange={handleOnChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter password..."
          onChange={handleOnChange}
        />
        <button type="submit">Ligin</button>
      </form>
    </div>
  );
};

export default Login;
