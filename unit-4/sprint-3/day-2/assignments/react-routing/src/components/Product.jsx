import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const status = useRef(null);
  // console.log(id);
  useEffect(() => {
    if (id) {
      const getData = async () => {
        try {
          let res = await fetch(`http://localhost:2233/Products/${id}`);
          let data = await res.json();
          setProduct(data);
          // console.log(res.ok);
          status.current = res.ok;
        } catch (err) {
          console.log(err);
        }
      };
      getData();
    }
  }, [id]);
  // console.log(status.current);
  return (
    <div>
      {status.current ? (
        <div style={{marginTop:"100px"}}>
          
          <h1>Product Details </h1>
          {/* <div>Product: {id}</div> */}
          <h3>Name: {product.name}</h3>
          <h3>Price: {product.price}</h3>
        </div>
      ) : (
        <div><h1>Product does not exist</h1></div>
      )}
    </div>
  );
};

export default Product;
