// console.log("Welcome to nodejs");

// function sum(a,b,print){
//     let result = a+b;
//     print(result);
// }

// // function print(data){
// //     console.log(data);
// // }

// // console.log(sum(1,2,prnt));
// sum(1,2,console.log);

// console.log("a");

// setTimeout(()=>{
//     console.log("c");
// },0);

// console.log("b");

// // Notes

// // common js Module:
// import x from "y"; //ESM -> Ecma script module

// // CJS
// const x = require("y");

// const { sum, sub, multi, div } = require("./test.js");

// console.log(sum(1,2));

// 3
// 1 - from your local system via relative path

// // 2 - npm
//     const checkEven = require("is-even");

//     console.log(checkEven(5))
//     console.log(checkEven(8))

// 3 - core modules

const fs = require("fs");
const path = require("path");

// console.log(fs);
// console.log(fs.readFileSync("./intro.txt",{encoding:"utf-8"}));
// console.log(fs.readFileSync("./test.js",{encoding:"utf-8"}));

// fs.readFile(path.join(".","test.js"), { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

// console.log("last sentence");

// // example 2
const os = require("os");

console.log(os);
// console.log(os.cpus()[0]);
// console.log(os.version());

// #########################
