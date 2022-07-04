const express = require("express");
const connection = require("./db");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRoutes");
const NotesRouter = require("./Routes/NotesRoutes");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", AuthRouter);
app.use("/user",NotesRouter)

app.get("/", (req, res) => {
  res.send("Welcome to backend home page!");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to database");
  } catch {
    console.log("Something went weong while connecting to db");
  }
  console.log("Server listning on port " + PORT);
});
