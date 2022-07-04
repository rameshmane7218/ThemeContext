import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
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
        "https://notes-app-nem101-e2-evaluation.herokuapp.com/auth/login",
        user
      )
      .then((r) => {
        console.log(r.data);
        localStorage.setItem("userId", r.data._id);
        navigate("/notes");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert("Wront Crediential");
      });
  };

  return (
    <div>
      LoginPage
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

export default LoginPage;
