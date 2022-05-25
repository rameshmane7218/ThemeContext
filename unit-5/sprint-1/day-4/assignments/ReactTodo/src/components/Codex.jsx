export const Codex = () => {
  return <h1>hii</h1>;
};
let res = { a: 10, b: 20, c: 30, d: 40 };
console.log({ ...res, a: 34, b: 4444 }); // {c: 30, d: 40}

// let res = [{ a: 10, b: 20, c: 30, d: 40 }];

// console.log([...res, res[0]]); // {c: 30, d: 40}
