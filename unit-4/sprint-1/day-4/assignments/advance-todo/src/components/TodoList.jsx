import React from "react";

export const TodoList = ({
  todoItem,
  setTodoItem,
  completed,
  setCompleted,
  move,
  deleteTodo
}) => {
  const [isCompleted, setIsCompleted] = React.useState(todoItem.isCompleted);

  // if (isCompleted === true) {
  //   setCompleted([...completed, todoItem]);
  // }
  // console.log(isCompleted);
  // const move = () => {
  //   console.log(todoItem.id);
  // };
  return (
    <div>
      <div className="todoItem">
        <div>
          <input
            defaultChecked={isCompleted}
            type="checkbox"
            onChange={(e) => {
              setIsCompleted(e.target.checked);
              console.log(todoItem.isCopmleted);
              if (e.target.checked === true) {
                move(todoItem.id);
              }
            }}
          />
          <p
            style={{
              textDecorationLine: isCompleted === true ? "line-through" : "none"
            }}
          >
            {todoItem.value}
          </p>
        </div>
        <button onClick={() => deleteTodo(todoItem.id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};
