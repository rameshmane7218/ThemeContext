const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  id: String,
  index: Number,
  title: String,
  fullTitle: String,
  year: Number,
  image: String,
  imDbRating: Number,
  imDbRatingCount: Number,
  description: String,
});

const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = { MovieModel };
