// http - protocol - set of instructions, rules, regulation
// 3-way handshake
// client ---------> expressing the intent --- server;
// client <------------acknowleges intent ----- server;
// client ----------> I want so and so -------- server;

// 5 GB - file
// comes in small small pieces or chunks or data packets;
// 10mb 15mb and so on

// 5 5GB*10 = 50GB
// internet bandwidth 100Mbps

// Verbs - action
// It's raining in Bangalore // in general english

// http verbs:

// GET, POST, PUT, PATCH, DELETE

// GET - get the data,
// POST - post/ crate the data;
// PUT - replacing that particular id/data.
// PATCH - you modify that particular field like there are 2-3 keys u can update only one also
// DELETE - delete a resource

// idempotent - something whose value remains unchanged

// is multiplication of 0 idempotent ?

// Headers
// - add more information about request and response

const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // res.write("hello")
  // res.write(" world")
  //   console.log(req.url);
  if (req.url === "/") {
    res.end("Welcome to localhost:8080/");
  }
  if (req.url == "/quiz") {
    // res.end("quiz goes here");
    // sending html file
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./quiz.html", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        res.end("Something went wrong");
      } else {
        res.end(data);
      }
    });
  }
  if (req.url == "/file") {
    // fs.readFile("./quiz.txt", { encoding: "utf-8" }, (err, data) => {
    //   if (err) {
    //     res.end("Something went wrong");
    //   } else {
    //     res.end(data);
    //   }
    // });
    const readStream = fs.createReadStream("./quiz.txt", { encoding: "utf-8" });
    readStream.pipe(res);
  }

  //   res.end(" bye!!");
});
// we cant use all/any port bcoz some port is used by os
// max 65,535
server.listen(8080, () => {
  console.log("listning on 8080");
});

//benchmark
// how much request aur server make
// npx autoconnon <host link>

// stream of data - continues flow of packets/chunks of data
