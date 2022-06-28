/*
// common js

// this are the inbuilt core modules
const os = require("os");
const dns = require("dns");
const fs = require("fs");
// console.log(os.cpus());

// read ip address of masaischool website.
dns.lookup("masaischool.com", (err, address, family) => {
  console.log(address);
});

fs.readFile("./dummy.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("No such file or directory");
  } else {
    console.log(data);
  }
});

// write data it will replace previous data
// fs.writeFile("./dummy.txt","Hello, world!", { encoding: "utf-8" }, (err, data)=>{
//     if(err) {
//         console.log("Something went wrong");
//     }
// });

const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log("Form server");
  //   console.log(req.method);
  //   console.log(req.url);
  //   res.end("Hello");

  if (req.url === "/home" && req.method === "GET") {
    res.end("Reading form home");
  } else {
    res.end("Hello");
  }
});

server.listen(5000, () => {
  console.log("listing on port 5000...");
});


*/

const express = require("express");

const app = express();

const loggerMiddleware = (req, res, next) => {
    console.log(req.method + " "+ req.url)
    next();

}
app.use(loggerMiddleware);



// method + route

app.get("/", (req, res) => {
    res.send("You are in home page");
});

app.get("/products", (req, res) => {
    res.send("You are in products page");
});


// app.post("/products", (req, res) => {
//     // const payload = req.body;
//     console.log("payload", req);
//     res.send(req.body);
// })





app.listen(5000, () => {
    console.log("listening on port 5000...");
})