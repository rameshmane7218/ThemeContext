import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signuppage = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    let payload = JSON.stringify(user);
    fetch("http://localhost:8080/auth/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: payload,
    })
      .then((res) => res.json())
      .then((res) => navigate("/login"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Signuppage</h1>
      <div>
        <input type="text" name="name" placeholder="name" onChange={handleChange} />
        <input type="text" name="username" placeholder="username" onChange={handleChange} />
        <input type="text" name="email" placeholder="email" onChange={handleChange} />
        <input type="text" name="password" placeholder="password" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export { Signuppage };
