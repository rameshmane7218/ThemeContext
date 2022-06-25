const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json()); // helps to convert data into json
app.use(express.urlencoded({ extended: true })); // helps in encoding part
// get all todos
app.get("/todos", (req, res) => {
  // read file
  // parse data
  // send back
  fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      res.send("Something went wrong");
    }
    const parsedData = JSON.parse(data);
    res.send(parsedData.todos);
  });
});

// post request
app.post("/todos", (req, res) => {
  // read req body and store in variable
  const postData = req.body;

  // read todos data and parse it
  fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Error occured while reading data");
    }
    const parsedData = JSON.parse(data);

    // distructure parsed data and add req body
    parsedData.todos = [...parsedData.todos, postData];

    // write back in todos file
    fs.writeFile(
      "./data.json",
      JSON.stringify(parsedData),
      { encoding: "utf-8" },
      (err, data) => {
        res.send(postData);
      }
    );
  });
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Error occured while reading data");
    }
    const parsedData = JSON.parse(data);
    const deletedItem = parsedData.todos.filter((el) => el.id == id);
    parsedData.todos = parsedData.todos.filter((el) => el.id != id);
    // console.log(parsedData);
    fs.writeFile(
      "./data.json",
      JSON.stringify(parsedData),
      { encoding: "utf-8" },
      (err, data) => {
        if (deletedItem[0]) {
          res.send(deletedItem[0]);
        } else {
          res.send({});
        }
      }
    );
  });
});

app.put("/todos/:id", (req, res) => {
  let { id } = req.params;
  let putData = req.body;

  // first read the data
  fs.readFile("./data.json", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      console.log("Error occurred while reading data");
    }
    const parsedData = JSON.parse(data);
    const updateData = parsedData.todos.filter((el) => el.id == id);
    // console.log("updateData: ", updateData[0]);
    if (updateData.length) {
      for (key in updateData[0]) {
        if (key != "id") {
          updateData[0][key] = putData[key];
        } else if (key == "id") {
          updateData[0][key] = id;
        }
      }
      // console.log("updated data: ", updateData[0]);
      parsedData.todos = parsedData.todos.filter((el) => el.id != id);
      parsedData.todos = [...parsedData.todos, updateData[0]];

      fs.writeFile(
        "./data.json",
        JSON.stringify(parsedData),
        { encoding: "utf-8" },
        (err, data) => {
          res.send(updateData[0]);
        }
      );
    } else {
      res.status(404).send({ error: "Item not found" });
    }
    // console.log(parsedData.todos);
    // res.send("data send succefully");
  });
});

app.listen(5000, () => {
  console.log("Server started on localhost:5000");
});
