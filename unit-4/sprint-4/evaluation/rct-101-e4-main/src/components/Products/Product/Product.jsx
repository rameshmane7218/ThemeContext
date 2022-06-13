import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  addItemToCartAPI,
  removeItemFromCart,
  removeItemFromCartAPI,
  updateCartItem,
  updateCartItemAPI,
} from "../../../store/cart/cart.actions";

const Product = ({ product }) => {
  const [countValue, setCountValue] = useState(0);
  const dispatch = useDispatch();
  const { data: cartData } = useSelector((state) => state.cart);

  const id = null;

  const handleAddToCart = (value) => {
    const addData = {
      productId: value,
      count: 1,
    };
    let ans = cartData.filter((data) => data.productId == value);
    // console.log("ans is:", ans);
    if (ans.length === 0) {
      dispatch(addItemToCartAPI(addData));
    }
  };

  const handleRemoveFromCart = (value) => {
    let remove = cartData.filter((data) => data.productId == value);
    // console.log("ans is:", remove,remove[0]?.id);
    if (remove.length !== 0) {
      // console.log(remove.id);
      dispatch(removeItemFromCartAPI(remove[0].id));
    }
  };
  const handleUpdate = () => {
    const addData = {
      productId: product.id,
      count: 1,
    };
    // dispatch(updateCartItemAPI(addData));
  };
  useEffect(() => {
    const getCount = () => {
      let ans = cartData.filter((data) => data.productId == product.id);
      return ans[0] ? ans[0]?.count : 0;
    };
    setCountValue(Number(getCount()));
  }, [product, cartData]);

  return (
    <div data-cy={`product-${id}`}>
      <h3 data-cy="product-name">{product?.name}</h3>
      <h6 data-cy="product-description">{product?.description}</h6>
      {countValue == 0 ? (
        <button
          data-cy="product-add-item-to-cart-button"
          onClick={() => handleAddToCart(product.id)}
        >
          Add To Cart
        </button>
      ) : (
        <div>
          <button
            data-cy="product-increment-cart-item-count-button"
            onClick={() => handleUpdate}
          >
            +
          </button>
          <span data-cy="product-count">{countValue}</span>
          <button
            data-cy="product-decrement-cart-item-count-button"
            onClick={() => handleUpdate}
          >
            -
          </button>
          <button
            data-cy="product-remove-cart-item-button"
            onClick={() => handleRemoveFromCart(product.id)}
          >
            Remove from cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
