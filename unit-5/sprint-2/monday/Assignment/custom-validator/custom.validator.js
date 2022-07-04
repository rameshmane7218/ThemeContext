const { Router } = require("express");

const customValidator = Router();

// customValidator.get("/", (req, res) => {
//   res.send("Hi this validation filed");
// });
customValidator.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = customValidator;
