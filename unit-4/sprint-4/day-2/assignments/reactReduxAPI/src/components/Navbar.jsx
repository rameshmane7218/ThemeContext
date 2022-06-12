import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      {`  `}
      <Link to="/todo/edit">Update</Link>
    </div>
  );
};

export default Navbar;
