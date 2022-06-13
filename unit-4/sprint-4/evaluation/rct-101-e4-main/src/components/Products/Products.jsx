import React from "react";
import styles from "./Products.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAPI } from "../../store/product/product.actions";
import Product from "./Product/Product";
import { getCartItemAPI } from "../../store/cart/cart.actions";

const Products = () => {
  const dispatch = useDispatch();
  const { data,loading,error } = useSelector((state) => state.products);
  const { data:cartData } = useSelector((state) => state.cart);
  console.log("data", data);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getProductsAPI());
    }
  }, [data, dispatch, getProductsAPI]);

  useEffect(() => {
    dispatch(getCartItemAPI());
  }, [dispatch, getCartItemAPI]);

  console.log("cart:", cartData);
  if(loading) return (<div>Loading...</div>)
  if(error) return (<div>Something went wront</div>)

  return (
    <div>
      {/* here */}
      <h1>Porducts</h1>
      <div className={styles.productsDiv}>
        {data?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
