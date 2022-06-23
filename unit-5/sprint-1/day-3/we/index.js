const http = require("http");

const server = http.createServer((req, res) => {
  // Handler
  // // method 1:
  // res.write("Hello");
  // res.write(" World");
  // res.end("!") // u can send last data(chunck byte) of leave blank.

  //   console.log(req.headers); // it will gives you huge object that contain req information

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  //   // send header to http
  //   res.setHeader("Content-Type","plain/text");
  //   res.setHeader("Content-Type","application/json");

  // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  // Routing in easy way
//   console.log(req.url);
    if( req.url === "/"){
        return res.end("Welcome to homepage");
    }
    if( req.url === "/products"){
        res.setHeader("Content-Type","application/json");
        return res.end(JSON.stringify([1,2,4,5,5]))
    }
    if(req.url === "/web"){
        return res.end("<h1>Welcome to UI<h1>");
    }
  // method 2:
  res.end("Hello World and nodemon!");
});

// here we need to give port number otherwise it will start on default server
// callback function is used to know whether server is started or not, it is not mandatory
server.listen(8080, () => {
  console.log("server started on localhost:8080/");
});

//here every time we are starting server after changes done
// to do this dynamically and watch changes and start server automatically
// we gonna install one library `nodemon`
