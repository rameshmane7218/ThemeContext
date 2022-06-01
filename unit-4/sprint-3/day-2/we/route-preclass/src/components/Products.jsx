import React from 'react'
import { useParams } from 'react-router-dom';

export const Products = () => {
    const {id} = useParams();
   
  return (
    <div>Product id:{id}</div>
  )
}
