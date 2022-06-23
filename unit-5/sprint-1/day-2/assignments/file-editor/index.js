const {
  readFileSync,
  appendFileSync,
  unlinkSync,
  renameSync,
  open,
  readdirSync,
} = require("fs");
const arg = process.argv.slice(2);

let operation = arg[0];
// console.log(arg);

switch (operation) {
  case "read":
    console.log(readFileSync(`./${arg[1]}`, { encoding: "utf-8" }));
    break;
  case "append":
    appendFileSync(`${arg[2]}`, `${arg[1]}`, { encoding: "utf-8" });
    break;
  case "delete":
    unlinkSync(`./${arg[1]}`, (err) => {
      if (err) console.log(err);
      console.log("file has been removed");
    });
    break;
  case "create":
    open(`${arg[1]}`, "w", (err, file) => {
      if (err) console.log(err);
      console.log("file has been created");
    });
    break;
  case "rename":
    renameSync(`./${arg[1]}`, `./${arg[2]}`, (err) => {
      if (err) console.log(err);
      console.log("Rename complete!");
    });
    break;
  case "list":
    console.log(readdirSync(`${arg[1]}`).join(" "));
    break;

  default:
    console.log("Please Enter valid arguments");
}
