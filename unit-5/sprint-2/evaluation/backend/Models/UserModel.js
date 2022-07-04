const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
