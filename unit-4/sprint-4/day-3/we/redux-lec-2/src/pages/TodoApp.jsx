import axios from "axios";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, getTodos } from "../store/todo/todo.actions";

const TodoApp = () => {
  const ref = useRef();

  const dispatch = useDispatch();

  const {
    getTodos: gTodo,
    addTodo: aTodo,
    data: todos,
  } = useSelector((state) => state.todo);
  console.log("data", todos);
  const addNew = () => {
    let values = ref.current.value;
    //   console.log('value:', values)

    dispatch(
      AddTodo({
        value: values,
        isCompleted: false,
      })
    );
    ref.current.value = null;
  };
  useEffect(() => {
    dispatch(getTodos);
    // console.log("hii");
  }, []);

  if (gTodo.loading) return <div>Loading...</div>;
  if (gTodo.error) return <div>Something went wrong....</div>;
  return (
    <div>
      TodoApp
      <div>
        <input type="text" ref={ref} placeholder="Add Something" />
        <button
          onClick={addNew}
           disabled={aTodo.loading}
        >
          AddTodo
        </button>
      </div>
      <br />
      {todos.map((todo) => (
        <div key={todo.id}>{todo.value}</div>
      ))}
    </div>
  );
};

export default TodoApp;
