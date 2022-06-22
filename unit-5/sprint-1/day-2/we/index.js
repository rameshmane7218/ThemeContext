// node - command
// Read Eval Print Loop
// REPL

//CJS: CommonJS (Modules) => const React = require("react")
//vs
//ESM: ES6 Modules. => import export (import React from "react")

// Export ESM: export {X}

// Export CJS: module.exports = {X}

const { readFileSync, writeFileSync } = require("fs"); //fs=> file system, os=> operating system, http=> network, streams

console.log(readFileSync("./test.txt",{encoding: "utf-8"}));
// Buffer: array of bytes

writeFileSync("./written.txt", "hello written file", {encoding:"utf-8"});
