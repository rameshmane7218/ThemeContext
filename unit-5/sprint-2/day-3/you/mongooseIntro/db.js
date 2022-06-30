// mongoose-
//1. Connect to the DB
//2. Schemas - structure, validate

const mongoose = require("mongoose");

const connection = mongoose.connect(`mongodb://localhost:27017/web17`);

// no more require 
/*
const connectDb = async () => {
  const conn = await connection;
  console.log("connection successfull to database");

  //// inserting data inside mongoDB
  const student1 = new StudentModel({
    name: "hiralal",
    age: 12,
    city: "Mumbai",
  });
  await student1.save();

  console.log("Student 1 saved");

  // const students =  await StudentModel.find({},{_id:0, __v: 0});
  // // const students =  await StudentModel.find();

  // console.log(students);

  conn.disconnect();
};

connectDb();
*/

//1. It helps us to connect to DB
//MVC - model view control
//2. Model/Schema

const StudentSchema = mongoose.Schema({
  name: { type: String, required: false },
  age: { type: Number, required: true },
  city: { type: String, required: true },
  hobbies: { type: [String], required: false, default: undefined },
  //   hobbies : {type: Array, required: true},
});

const StudentModel = mongoose.model("student", StudentSchema);



module.exports = {
    connection,
    StudentModel
}