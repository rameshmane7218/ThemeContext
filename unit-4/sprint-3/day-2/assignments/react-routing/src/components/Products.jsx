import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("http://localhost:8080/Products");
      let data = await res.json();
      setProducts(data);
    };
    getData();
  }, []);
  // console.log("data is:", products);
  return (
    <div className="tableDiv">
      All Products
      <div>
        <table border="1px">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Price</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id + 1}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td key={p.id}>
                  <Link to={`/products/${p.id}`}>see More</Link>
                  {/* <Link  to={`${p.id}`}>
                    see More
                  </Link> */}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <Outlet/> */}
    </div>
  );
};

export default Products;
