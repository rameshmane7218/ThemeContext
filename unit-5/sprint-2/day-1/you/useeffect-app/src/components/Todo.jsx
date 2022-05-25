import React from "react";

const Todo = () => {
  const [todo, setTodo] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState("");
  //   fetch("http://localhost:8000/todos")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     //   setTodo(data);
  //     });

  const seveInfo = () => {
    console.log("jhii")
    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: newTodo,
        isCompleted: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log("data",data);
        setTodo([...todo, data]);
        setNewTodo("");
      });
  };

  React.useEffect(() => {
    fetch("http://localhost:8000/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log("after",data);
        setTodo(data);
      });
  }, []);
//   console.log("todo", todo);

  return (
    <div>
      Todo
      <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={seveInfo}>+</button>
      </div>
      {todo.map((todo) => (
        <div key={todo.id}>{todo.value}</div>
      ))}
    </div>
  );
};

export default Todo;
