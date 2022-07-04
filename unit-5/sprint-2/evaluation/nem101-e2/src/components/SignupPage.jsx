import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log("user details: ",user);

    axios
      .post(
        "https://notes-app-nem101-e2-evaluation.herokuapp.com/auth/signup",
        user
      )
      .then((r) => console.log(r.data))
      .then(navigate("/login"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>SignupPage</h1>
      <div>
        <form
          action=""
          onSubmit={handleOnSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
          <button>SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
