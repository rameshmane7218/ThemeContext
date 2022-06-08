import { Heading } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { FetchContext } from "../context/FetchContext";

const Jewelery = () => {
  const {getData, products} = useContext(FetchContext);

  useEffect(() => {
    getData("jewelery");
  }, []);
  // console.log(products)
  return (
    <div>
      <Heading>Jewelery</Heading>
      <Layout products={products} />
    </div>
  );
};

export default Jewelery;
