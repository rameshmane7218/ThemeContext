import React from "react";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { FetchContext } from "../context/FetchContext";

const MensClothes = () => {
 const {getData, products} = useContext(FetchContext);

  useEffect(() => {
    getData("men's clothing");
  }, []);
  // console.log(products)
  return (
    <div>
      <Heading>Men's Clothes</Heading>
      <Layout products={products} />
    </div>
  );
};

export default MensClothes;
