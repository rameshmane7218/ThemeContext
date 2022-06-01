import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Cart from './Cart'

const Body = () => {
  const value = useContext(AuthContext);
  return (
    <div>Body
        <Cart/> 
        Auth Context: {value}
    </div>
  )
}

export default Body;