import React from "react";

export const Completed = ({ compl, deleteComp }) => {
  console.log("compl", compl.value);
  return (
    <div className="todoItem completedItem">
      <div>
        <input disabled={true} checked type="checkbox" />
        <p style={{ textDecorationLine: "line-through" }}>{compl.value}</p>
      </div>
      <button onClick={() => deleteComp(compl.id)}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};
