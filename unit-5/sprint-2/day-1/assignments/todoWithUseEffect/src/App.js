import React from "react";
import TaskApp from "./components/TaskApp";
// import data from "./data/tasks.json";

function App() {
  const [task, setTask] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [disablelastPage, setDisablelastPage] = React.useState(false);
  React.useEffect(() => {
    getTodos(page);
  }, [page]);

  const getTodos = (page) => {
    console.log("pageNO is:", page);
    fetch(`${process.env.REACT_APP_BASE_URL}/todos?_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("no of Items", data.length);
        if (data.length !== 0) {
          setDisablelastPage(false);
          setTask(data);
        } else {
          setDisablelastPage(true);
        }
      });
  };

  return (
    <div>
      {/* Code Here */}
      <div style={{ textAlign: "center" }}>
        <div> {process.env.REACT_APP_BASE_URL}</div>
      </div>
      <TaskApp
        task={task}
        setTask={setTask}
        getTodos={getTodos}
        page={page}
        setPage={setPage}
        disablelastPage={disablelastPage}
      />
    </div>
  );
}

export default App;
