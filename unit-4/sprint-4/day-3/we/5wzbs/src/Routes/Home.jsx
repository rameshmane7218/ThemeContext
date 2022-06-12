import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";
import { getTodo } from "../Redux/todos/action";

function Home() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  React.useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <div>
      <h3>{token}</h3>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export { Home };
