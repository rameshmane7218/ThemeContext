import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  // const navigate = Navigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let res = await fetch("http://localhost:8080/Products");
      let data = await res.json();
      setProducts(data);
    };

    fetchProducts();
    // console.log("indisde")
  }, []);

  return (
    <div>
      Products:{" "}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div>
            {products.map((p) => (
              <div key={p.id}>
                {/* {p.name} */}
                <Link to={`/products/${p.id}`}> {p.name} </Link>
                {/* <Link to={`/products/${p.id}`}> {p.name} </Link> */}
              </div>
            ))}
          </div>
            <Outlet/>
        {/* <Outlet/> */}
      </div>
    </div>
  );
};

export default Products;
