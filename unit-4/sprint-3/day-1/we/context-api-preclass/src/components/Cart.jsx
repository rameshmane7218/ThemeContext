import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

const Cart = () => {
  const {handleCartUpdate} = useContext(CartContext);
  return (
    <div>
        <button onClick={()=>handleCartUpdate(1)}>Buy now</button>
    </div>
  )
}

export default Cart