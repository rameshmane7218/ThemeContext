import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo } from "../store/todo/todo.actions";

const TodoApp = () => {
  const ref = useRef();

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const addNew = () => {
    let values = ref.current.value;
    //   console.log('value:', values)
    dispatch(
      AddTodo({
        value: values,
        isCompleted: false,
      })
    );
  };
  return (
    <div>
      TodoApp
      <div>
        <input type="text" ref={ref} placeholder="Add Something" />
        <button onClick={addNew}>AddTodo</button>
      </div>
      <br />
      {todos.map((todo) => (
        <div key={todo.id}>{todo.value}</div>
      ))}
    </div>
  );
};

export default TodoApp;
