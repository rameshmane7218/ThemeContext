const { Router } = require("express");
const NotesModel = require("../Models/NotesModel");

const NotesRouter = Router();

NotesRouter.get("/:userId/notes", async (req, res) => {
  const userId = req.params.userId;

  const notes = await NotesModel.find({ userId });
  res.send(notes);
});

NotesRouter.post("/:userId/notes", async (req, res) => {
  const userId = req.params.userId;
  let payload = {
    ...req.body,
    userId,
  };
  const note = await new NotesModel(payload);
  note.save((err, success) => {
    if (err) {
      return res.status(500).send({ message: "Something went wrong" });
    } else {
      return res.status(201).send(success);
    }
  });
});

NotesRouter.patch("/:userId/notes/:_id", async (req, res) => {
  const userId = req.params.userId;
  const _id = req.params._id;

  const note = await NotesModel.findOneAndUpdate({ userId, _id }, req.body);

  const updated = await NotesModel.findOne({ userId, _id });
  res.status(200).send(updated);
});
NotesRouter.delete("/:userId/notes/:_id", async (req, res) => {
  const userId = req.params.userId;
  const _id = req.params._id;

  const deleted = await NotesModel.findOneAndDelete({ userId, _id });

  if (deleted) {
    res.status(200).send(deleted);
  } else {
    res.status(404).send({ message: "Not Found" });
  }
});

module.exports = NotesRouter;
