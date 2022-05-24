import React from "react";
import { Completed } from "./Completed";
import { v4 as uuidv4 } from "uuid";

export const ShowTodo = ({ completed, deleteItem }) => {
  const [show, setShow] = React.useState(false);
  const showTodoList = (e) => {
    // console.log("dsfjkds");
    // console.log(e.target.innerText);
    e.target.innerText =
      e.target.innerText === "SHOW COMPLETED TO-DOS"
        ? "HIDE COMPLETED TO-DOS"
        : "SHOW COMPLETED TO-DOS";
    setShow(!show);
  };
  return (
    <div>
      <button onClick={showTodoList}>SHOW COMPLETED TO-DOS</button>
      <div
        className="completedTodoList"
        style={{ display: show === true ? "block" : "none" }}
      >
        {completed.map((compl) => (
          <Completed key={uuidv4()} compl={compl} deleteComp={deleteItem} />
        ))}
      </div>
    </div>
  );
};
