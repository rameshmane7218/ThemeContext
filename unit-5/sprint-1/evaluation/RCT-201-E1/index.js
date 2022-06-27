const express = require("express");
const fs = require("fs");
const dns = require("dns");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Question no. 1 starts here
//Make an API which accepts a website name and returns it's IP address.
app.post("/getmeip", (req, res) => {
  const payload = req.body;
  console.log(payload);
  const website = payload.website_name;
  console.log(website);

  dns.lookup(website, (err, address, family) => {
    if (err) {
      res.send("Something went wrong");
    }
    res.send(address);
  });
});
// Question no. 1 end here

// Question no. 2 starts here
//Make an API using Express to perform CRUD Operation

app.post("/products/create", (req, res) => {
  postData = req.body;
  console.log(postData);
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

app.get("/products", (req, res) => {
  fs.readFile("./products.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Something went wrong while reading data");
    }
    const parsedProducts = JSON.parse(data);
    res.send(parsedProducts.products);
  });
});

app.put("/products/:productId", (req, res) => {
  res.send("This is put request");
});

app.delete("/products/:productId", (req, res) => {
  const { productId } = req.params;
  console.log(productId);

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

app.listen(7000, () => {
  console.log("Server is started on port 7000");
});
