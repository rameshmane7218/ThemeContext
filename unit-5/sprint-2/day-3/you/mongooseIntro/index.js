const express = require("express");
const { connection, StudentModel } = require("./db");
const app = express();
app.use(express.json());

app.get("/students", async (req, res) => {
  // all
  //   const result = await StudentModel.find({}, { __v: 0 });

  // const params = req.query;
  // console.log(params)

  //search
  //   const result = await StudentModel.find(params, { __v: 0 });

  //pagination
  const { pageNo, perPage } = req.query;
  const result = await StudentModel.find({}, { __v: 0 })
    .skip((pageNo - 1) * perPage)
    .limit(perPage);

  res.send(result);
});

app.post("/students", async (req, res) => {
  //   console.log(req.body);
  const result = await new StudentModel(req.body);
  await result.save();
  res.send(result);
});

app.listen(7000, async () => {
  try {
    await connection;
    console.log("Connection to DB successfully");
  } catch {
    console.log("Failed to connect to DB");
  }
  console.log("Server successfully started");
});
