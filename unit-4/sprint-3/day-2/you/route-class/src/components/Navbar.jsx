import React from 'react'
import {Link, useNavigate} from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    const handleOnClick = (id) =>{

        if(id == 1){
            navigate("/products/1")
        }
    }
  return (
    <div>
        {/* <a href="/">Home</a>{" "}
        <a href="/about">About</a>{" "}
        <a href="/products">Products</a> */}
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/products">Products</Link>
        <button onClick={()=>handleOnClick(1)}>Go To Product 1</button>
        <button onClick={()=>handleOnClick(2)}>Go To Product 2</button>
       
    </div>
  )
}

export default Navbar