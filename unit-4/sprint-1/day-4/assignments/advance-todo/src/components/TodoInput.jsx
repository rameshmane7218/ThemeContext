import React from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoInput = ({ query, setQuery, todo, setTodo }) => {
  const handleInput = (e) => {
    if (e.key === "Enter") {
      // console.log(e.target.value);
      // setQuery(e.target.value);
      let Value = e.target.value;
      setTodo([
        ...todo,
        {
          id: uuidv4(),
          value: Value,
          isCopmleted: false
        }
      ]);
      e.target.value = "";
    }
    // console.log(todo);
  };

  // console.log("query",query);
  return (
    <div className="inputBox">
      <input
        type="text"
        onKeyPress={handleInput}
        placeholder="Add a to-do..."
      />
      <i className="fa-solid fa-plus"></i>
    </div>
  );
};
