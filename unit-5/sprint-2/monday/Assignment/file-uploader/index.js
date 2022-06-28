const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Homepage");
});
app.get("/upload", (req, res) => {
  res.send(`<form action="/profile" method="post" enctype="multipart/form-data" >
    <input type="file" name="avatar" />
    <button type="submit"> Submit</button>
</form>`);
});

app.post("/profile", upload.single("avatar"), (req, res, next) => {
  // console.log(req.file);
  // console.log("uploaded file is: ", req.file.originalname);
  res.send(
    `<div><h2>File uploaded succefully</h2> </br> <a href="/upload">Go back</a></div>`
  );
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
