const { Router } = require("express");
const UserModel = require("../Models/UserModel");

const AuthRouter = Router();

AuthRouter.get("/", async (req, res) => {
  const user = await UserModel.find();

  res.status(200).send(user);
});

AuthRouter.post("/signup", async (req, res) => {
  console.log(req.body);
  const user = await new UserModel(req.body);
  user.save((err, success) => {
    if (err) {
      res.status(500).send({ message: "Error occurred" });
    } else {
      res.status(200).send({ message: "Sign Up Success", token: 12345 });
    }
  });
});
AuthRouter.post("/login", async (req, res) => {
  const checkUser = await UserModel.find(req.body);

  if (checkUser.length >= 1) {
    let { name, _id } = checkUser[0];

    let payload = {
      _id,
      name,
      token: 12345,
    };

    res.status(200).send(payload);
  } else {
    res.status(404).send({ message: "Weong Creadientioal" });
  }
});

module.exports = AuthRouter;
