import React from "react";
import { useNavigate } from "react-router";


const Homepage = () => {
    const navigate = useNavigate();
    return <div>
        <h1>Homepage</h1>
        <button onClick={() => {
            navigate("/login")
        }}>Login</button>
        <button onClick={() => {
            navigate("/signup")
        }}>Signup</button>
    </div>
}

export {Homepage}