import React from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Homepage</h1>
      <div>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >   
          Signup
        </button>
      </div>
    </div>
  );
};

export default HomePage;
