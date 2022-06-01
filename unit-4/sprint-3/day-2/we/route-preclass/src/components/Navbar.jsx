import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        {/* by using ancher tag the page will reload and we will loss the hook state control so will not use a tag  */}
        {/* <a href="/">Home</a>
        <a href="/about">About</a> */}

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar