import React,{ useContext } from 'react'
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
    const {cartCount} = useContext(CartContext);
    // if object or array has been passed from CartContext the we need to distructure it
  return (
    <div>
        Cart: {cartCount}
    </div>
  )
}

export default Navbar