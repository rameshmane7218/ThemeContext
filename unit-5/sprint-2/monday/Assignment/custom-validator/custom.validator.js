const { Router } = require("express");

const customValidator = Router();

customValidator.post('/', (req, res )=>{
    res.send("Hi this validation filed");
})




module.exports = customValidator;


