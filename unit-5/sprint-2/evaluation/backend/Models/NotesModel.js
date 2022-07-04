const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema({
  title: String,
  note: String,
  label: String,
  userId: String,
});

const NotesModel = mongoose.model("note", NotesSchema);

module.exports = NotesModel;
