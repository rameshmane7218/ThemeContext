import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../components/Layout";

const MensClothes = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getData = async () =>{
      let res = await axios.get(`https://fakestoreapi.com/products/category/men's%20clothing`);
      // console.log(res);
      console.log(res.data);
      setProducts(res.data);
    };
    getData();
  },[])
  console.log(products)
  return <div>
    MensClothes
    <Layout products={products}/>
  </div>;
};

export default MensClothes;
