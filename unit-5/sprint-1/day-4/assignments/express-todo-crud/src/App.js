import React from "react";
import TaskApp from "./components/TaskApp";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getTodosAPI } from "./store/action";
function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  // console.log(data);
  // useEffect(() => {
  //   dispatch(getTodosAPI());
  // }, []);
  return (
    <div>
      {/* Code Here */}
      <TaskApp />
    </div>
  );
}

export default App;
