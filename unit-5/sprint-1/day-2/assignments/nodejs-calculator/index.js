const {randomInt} = require("crypto")
const arg = process.argv.slice(2);

if (arg.length != 0) {
  let fun = arg[0];
  switch (fun) {
    case "add":
      console.log(Number(arg[1]) + Number(arg[2]));
      break;
    case "sub":
      console.log(Number(arg[1]) - Number(arg[2]));
      break;
    case "mult":
      console.log(Number(arg[1]) * Number(arg[2]));
      break;
    case "divide":
      console.log(Number(arg[1]) / Number(arg[2]));
      break;
    case "sin":
      console.log(Math.sin(Number(arg[1])));
      break;
    case "cos":
      console.log(Math.cos(Number(arg[1])));
      break;
    case "tan":
      console.log(Math.tan(Number(arg[1])));
      break;
    case "random":
        console.log(randomInt(9));
      break;
    default:
      console.log("Invalid argument passed");
  }
}

