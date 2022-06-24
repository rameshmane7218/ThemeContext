const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json()); // help to conver data
app.use(express.urlencoded({ extended: true })); // helps with encoding part
// app.use(express.text);
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/products", (req, res) => {
  res.send("products");
});

app.post("/send", (req, res) => {
  const dataFromClient = req.body;
  fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Error reading file");
    }
    const parsedData = JSON.parse(data);
    parsedData.messages = [...parsedData.messages, dataFromClient];
    fs.writeFile(
      "./data.json",
      JSON.stringify(parsedData),
      { encoding: "utf-8" },
      (err, data) => {
        res.send("message added");
      }
    );
  });

  //   fs.writeFile("./data.json", data, { encoding: "utf-8" }, (err, data) => {
  //     if (err) {
  //       console.log("Error occurred, please try again later");
  //     }
  //     console.log("Stored successfully");
  //   });
  //   res.send("Something was sent");
});

app.get("/messages", (req, res) => {
  //read form the file
  fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      res.send("Something went wrong");
    }
    // console.log(data);
    const parsedData = JSON.parse(data);
    const messages = parsedData.messages;
    res.send(JSON.stringify(messages));
  });
  // parse it if required
  // send to the client
});

app.delete("/messages/:id", (req, res) => {
  const { id } = req.params;
  //   console.log(id);
  res.send("okey will delete soon");

  //read the file and get the data
  fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Something went wrong");
    }
    const parsedData = JSON.parse(data);
    const messages = parsedData.messages;
    console.log("messages", messages);
    const deletedData = messages.filter((el) => el.id !== Number(id));
    console.log("deleted", deletedData);
    parsedData.messages = deletedData;
    fs.writeFile(
      "./data.json",
      JSON.stringify(parsedData),
      { encoding: "utf-8" },
      (err, data) => {
        res.send(`message ${id} was successfully deleted`);
      }
    );
  });
  //delete by id

  //filter
  //if ele.id !== id

  // write - store in json
});

// we just need to remember below thing here
// method + route
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
