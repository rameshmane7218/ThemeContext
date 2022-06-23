const http = require("http");
const fs = require("fs");
const fsPromises = require("fs/promises");
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === "/") {
    res.end("Welcome to benchmarking");
  }
  if (req.url === "/textsync") {
    const data1 = fs.readFileSync("./data.txt", { encoding: "utf-8" });
    res.end(data1);
  }
  if (req.url === "/textasync") {
    fs.readFile("./data.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        res.end("Something went wrong");
      } else {
        res.end(data);
      }
    });
  }
  if (req.url === "/textstream") {
    const readStream = fs.createReadStream("./data.txt");
    readStream.pipe(res);
  }
  if (req.url === "/textpromise") {
    const fetchData = async () => {
      try {
        const data = await fsPromises.readFile("./data.txt");
        res.end(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }
});

server.listen(8080, () => {
  console.log("localhost is runnig on port 8080");
});
