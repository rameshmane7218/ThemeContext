import React from "react";
import styles from "./addTask.module.css";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ data, setData, getTodos, page }) => {
  const [todo, setTodo] = React.useState("");

  // NOTE: do not delete `data-cy` key value pair

  const handleInput = (e) => {
    // console.log(e.target.value);
    setTodo(e.target.value);
    // e.target.value="";
  };

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      // console.log("enter key pressed",todo);
      addTodo(todo);
    }
  };
  const addTodo = (value) => {
    // console.log(value);
    // console.log(value.trim().length);

    let isDuplicate = true;
    data.filter((data) => {
      if (data.text === value) {
        isDuplicate = false;
      }
    });

    // console.log("isDuplicate",isDuplicate);
    if (value.trim().length && isDuplicate) {
      fetch(`${process.env.REACT_APP_BASE_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: uuidv4(),
          text: value,
          done: false,
          count: 1,
        }),
      });
      getTodos(page);

      // .then((res) => res.json())
      // .then((d) => {
      //   // console.log("data",d);
      //   setData([...data, d]);
      // });
    }
    setTodo("");
  };
  // console.log(todo);
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        value={todo}
        placeholder="Add Task..."
        onChange={handleInput}
        onKeyDown={handleKeyEnter}
      />
      <button
        data-cy="add-task-button"
        onClick={() => addTodo(todo)}
        title="Add Task"
      >
        +
      </button>
    </div>
  );
};

export default AddTask;
