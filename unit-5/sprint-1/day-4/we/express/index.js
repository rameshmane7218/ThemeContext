const express = require("express");

const app = express();

app.get("/", (req, res) => {
//   res.end("Welcome to Homepage");
  res.send("Welcome to Homepage"); // its same like res.end it will send data back and end the request automatically
});

app.get("/products", (req, res) => {
//   res.end(JSON.stringify([1,2,43,5,5]));
    res.send([1,2,3,4,5])
});
app.get("/webpage", (req, res) => {
//   res.end(JSON.stringify([1,2,43,5,5]));
    res.send("<h1>Welcome to Webpage</h1>")
});

app.post("/products", (req, res) => {
  res.end(JSON.stringify([1,2,4,5,6]));
});



app.listen(8000, () => {
  console.log("Server started on http://localhost:8000");
});
