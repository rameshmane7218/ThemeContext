const express = require("express");
const connection = require("./db");
const cors = require("cors");
const { MovieModel } = require("./models/MovieModel");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Home page");
});

app.get("/movies", async (req, res) => {
  console.log(req.query);
  let movies;
  movies = await MovieModel.find(req.query);
  // if (req.query) {
  // } else {
  //   movies = await MovieModel.find();
  // }
  res.send(movies);
});
app.post("/movies/add", async (req, res) => {
  const movie = await new MovieModel(req.body);
  await movie.save();
  res.send(movie);
});

app.listen(8000, async () => {
  try {
    await connection;
    console.log("Connected to database");
  } catch {
    console.log("Something went weong while connecting to db");
  }
  console.log(`Server listning on port 8000...`);
});
