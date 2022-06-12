import React, { useContext, useRef, useState } from "react";
import styles from "./addTask.module.css";
import { v4 as uuidv4 } from "uuid";
import { ReducerContext } from "../../context/ReducerContext";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAPI } from "../../store/todo/todo.actions";

const AddTask = () => {
  const dispatch = useDispatch();
  const {
    addTodo: aTodo,
    data,
  } = useSelector((state) => state);

  const ref = useRef();

  const addTodo = () => {
    let value = ref.current.value;

    // console.log("value", value);

    let flag = true;
    if (value.trim() == "") {
      flag = false;
    }
    let ans = data.filter((todo) => {
      if (todo.text == value) {
        flag = false;
      }
      return false;
    });

    if (flag) {
      dispatch(
        addTodoAPI({
          id: uuidv4(),
          text: value,
          done: false,
          count: 1,
        })
      );
    }
  };

  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        ref={ref}
        placeholder="Add Task..."
        // onChange={handleInput}
      />
      <button data-cy="add-task-button" disabled={aTodo.loading}  onClick={() => addTodo()}>
        +
      </button>
    </div>
  );
};

export default AddTask;
