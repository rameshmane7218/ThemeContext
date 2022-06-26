const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  // res.write("Welcome to Homepage ");

  let mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".wav": "audio/wav",
    ".mp4": "video/mp4",
    ".woff": "application/font-woff",
    ".ttf": "application/font-ttf",
    ".eot": "application/vnd.ms-fontobject",
    ".otf": "application/font-otf",
    ".wasm": "application/wasm",
    ".md": "text/markdown",
  };

  if (req.url !== "/favicon.ico") {
    if (req.url.includes(".") || req.url.includes("LICENSE")) {
      var extname = String(path.extname(req.url).toLowerCase());
      let contentType = mimeTypes[extname] || "text/html";

      fs.readFile(`.${req.url}`, (err, data) => {
        // console.log("new Path: ", req.url);
        if (err) {
          res.writeHead(500);
          res.end(
            "Sorry, check with the site admin for error: " + err.code + " ..\n"
          );
        } else {
          if (req.url.includes("LICENSE")) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          } else {
            // console.log("content-type: ", contentType);
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
          }
        }
      });
    } else {
      fs.readdir(`.${req.url}`, (err, files) => {
        if (err) {
          res.end("Something went wront");
        }
        let allFiles = files;
        // console.log("allFiles: ", allFiles);
        // console.log("path: ", path.relative("/", req.url));
        // let prePath = path.relative("/", req.url);
        for (let i = 0; i < allFiles.length; i++) {
          res.write(
            `<a href= http://localhost:8080${req.url}/${allFiles[i]}><li>${allFiles[i]}</li></a>`
          );
        }
        res.end();
      });
    }
  } else {
    res.end();
  }
});

server.listen(8080, () => {
  console.log("server is started on port 8080");
});
