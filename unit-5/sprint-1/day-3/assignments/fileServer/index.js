const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("Welcome to Homepage ");
  console.log(req.url);
  if (req.url !== "/favicon.ico") {
    fs.readdir(`.${req.url}`, (err, files) => {
      if (err) {
        res.end(err);
      }
      let allFiles = files;
      for (let i = 0; i < allFiles.length; i++) {
        if(allFiles[i].includes(".")){
            res.write(`<a href=/${allFiles[i]}><li>${allFiles[i]}</li></a>`);
        }else{
            res.write(`<a href=/${allFiles[i]}><li><i class="fa-solid fa-folder"></i>${allFiles[i]}</li></a>`);
        }
      }
      res.end();
    });
  } else {
    res.end();
  }
});

server.listen(8080, () => {
  console.log("server is started on port 8080");
});
