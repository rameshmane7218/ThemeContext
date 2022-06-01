import React, { useContext } from 'react'
import { CardContext } from '../context/CardContext'

const Wishlist = () => {
    const {count} = useContext(CardContext)
  return (
    <div>Wishlist: {count}</div>
  )
}

export default Wishlist