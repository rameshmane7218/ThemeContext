const sum = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multi = (a, b) => {
  return a * b;
};
const div = (a, b) => {
  return a / b;
};

// // ESM
// export default sum;  // or
// // export {sum};

// CJS
module.exports = { sum, sub, multi, div };
