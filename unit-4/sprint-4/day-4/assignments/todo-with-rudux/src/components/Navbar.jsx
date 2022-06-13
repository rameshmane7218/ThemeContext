import React from "react";
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        Navbar
        <Link to='/signup'>SigbUp</Link>
        <Link to='/login'>Login</Link>
    </div>
  );
};

export default Navbar;
