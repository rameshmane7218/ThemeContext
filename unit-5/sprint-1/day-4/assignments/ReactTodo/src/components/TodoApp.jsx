import React from "react";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { ShowTodo } from "./ShowTodo";
import { v4 as uuidv4 } from "uuid";
// import { Codex } from "./Codex";

export const TodoApp = () => {
  const [query, setQuery] = React.useState("");
  const [todo, setTodo] = React.useState([]);
  const [completed, setCompleted] = React.useState([]);
  // console.log("queryTT", query);
  // console.log(todo);
  // console.log(completed);
  const move = (value) => {
    console.log(value);
    let compTodo = todo.filter((todo) => todo.id === value);
    console.log("newTodo", compTodo[0]);
    setCompleted([...completed, compTodo[0]]);
    console.log("comp", completed);

    let newTodo = todo.filter((todo) => todo.id !== value);
    setTodo(newTodo);
  };

  const deleteItem = (value) => {
    let newTodo1 = completed.filter((todo) => todo.id !== value);
    setCompleted(newTodo1);
    console.log("deleted");
  };
  const deleteTodo = (value) => {
    let newTodo2 = todo.filter((todo) => todo.id !== value);
    setTodo(newTodo2);
    console.log("deleted2");
  };

  return (
    <div className="MainDiv">
      <h1>Todo App</h1>
      <TodoInput
        query={query}
        setQuery={setQuery}
        todo={todo}
        setTodo={setTodo}
      />
      {todo.map((todo) => (
        <TodoList
          key={uuidv4()}
          todoItem={todo}
          setTodoItem={setTodo}
          completed={completed}
          setCompleted={setCompleted}
          move={move}
          deleteTodo={deleteTodo}
        />
      ))}
      <ShowTodo key={uuidv4()} completed={completed} deleteItem={deleteItem} />
    </div>
  );
};
