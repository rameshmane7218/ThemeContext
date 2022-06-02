import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const fetchProducts = async () => {
        let res = await fetch(`http://localhost:2233/Products/${id}`);
        let data = await res.json();
        setProduct(data);
      };

      fetchProducts();
    }
    console.log("inside")
  }, []);
  return <div>
      Product id: {id}
      <div>Name{product.name}</div>
  </div>;
};

export default Product;
