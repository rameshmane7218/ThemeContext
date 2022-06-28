const express = require("express");
const { Router } = require("express");
const fs = require("fs");

const productsRoutes = Router();

productsRoutes.post("/products/create", (req, res) => {
  let postData = req.body;
  // console.log(postData);
  postData = { ...postData, createdAt: new Date().toJSON() };
  fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Something went wrong while reading data");
    }
    const parsedProducts = JSON.parse(data);
    parsedProducts.products = [...parsedProducts.products, postData].sort(
      (a, b) => {
        if (a.createdAt > b.createdAt) return 1;
        if (a.createdAt < b.createdAt) return -1;
      }
    );

    fs.writeFile(
      "./products.json",
      JSON.stringify(parsedProducts),
      (err, data) => {
        if (err) {
          console.log("Error occurred while writing data");
        }
        res.send(postData);
      }
    );
  });
});

productsRoutes.get("/products", (req, res) => {
  fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Something went wrong while reading data");
    }
    const parsedProducts = JSON.parse(data);
    res.send(parsedProducts.products);
  });
});

productsRoutes.put("/products/:productId", (req, res) => {
  const { productId } = req.params;
  let updateData = req.body;
  // console.log(productId);

  fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Something went wrong while reading data");
    }
    const parsedProducts = JSON.parse(data);
    const updateProduct = parsedProducts.products.filter(
      (el) => el.id == productId
    );
    for (let key in updateProduct[0]) {
      if (key == "id" || key == "createdAt") {
        updateProduct[0][key] = updateProduct[0][key];
      } else {
        updateProduct[0][key] = updateData[key];
      }
    }
    // console.log("updated product: ",updateProduct);
    parsedProducts.products = parsedProducts.products.filter(
      (el) => el.id != productId
    );
    parsedProducts.products = [
      ...parsedProducts.products,
      updateProduct[0],
    ].sort((a, b) => {
      if (a.createdAt > b.createdAt) return 1;
      if (a.createdAt < b.createdAt) return -1;
    });

    fs.writeFile(
      "./products.json",
      JSON.stringify(parsedProducts),
      (err, data) => {
        if (err) {
          console.log("Error occurred while writing data");
        }
        res.send(updateProduct[0]);
      }
    );
  });
});

productsRoutes.delete("/products/:productId", (req, res) => {
  const { productId } = req.params;
  //   console.log(productId);

  fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Something went wrong while reading data");
    }
    const parsedProducts = JSON.parse(data);
    const deletdProduct = parsedProducts.products.filter(
      (el) => el.id == productId
    );

    parsedProducts.products = parsedProducts.products
      .filter((el) => el.id != productId)
      .sort((a, b) => {
        if (a.createdAt > b.createdAt) return 1;
        if (a.createdAt < b.createdAt) return -1;
      });

    fs.writeFile(
      "./products.json",
      JSON.stringify(parsedProducts),
      (err, data) => {
        if (err) {
          console.log("Error occurred while writing data");
        }
        res.send(deletdProduct[0]);
      }
    );
  });
});


module.exports = productsRoutes;