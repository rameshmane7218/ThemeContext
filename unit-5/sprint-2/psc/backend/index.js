const express = require("express");
const connection = require("./db");
const app = express();
require("dotenv").config();
const cors = require("cors");
const AuthRouter = require("./routes/auth.route");


const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("auth",AuthRouter);





app.listen(PORT, async () => {
  try {
    connection;
    // console.log("Server connected to mongodb");
  } catch {
    console.log("Couldn't connect to mongodb");
  }
  console.log("server listening on port " + PORT);
});
