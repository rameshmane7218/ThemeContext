const express = require("express");
const customValidator = require("./custom.validator");

const app = express();
app.use(express.json());
app.use("/movies",customValidator);

app.get("/", (req, res) => {
    res.send("Welcome!");
})
app.post("/:id", (req, res) => {
   
})

app.listen(5000, ()=>{
    console.log("listening on port 5000...");
})