import { Heading } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { FetchContext } from "../context/FetchContext";

const WomensClothes = () => {
  const { getData, products } = useContext(FetchContext);

  useEffect(() => {
    getData("women's clothing");
  }, []);
  // console.log(products)
  return (
    <div>
      <Heading>Womens's Clothes</Heading>
      <Layout products={products} />
    </div>
  );
};

export default WomensClothes;
