import React, { useContext } from 'react'
import { CardContext } from '../context/CardContext'

const Cart = () => {
    const {addToCart} = useContext(CardContext);
  return (
    <div>Cart
        <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default Cart