import React from "react";
import TaskApp from "./components/TaskApp";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Task from "./components/Task/Task";
import UpdateTask from "./components/UpdateTask/UpdateTask";

function App() {
  return (
    <div>
      {/* Code Here */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<TaskApp />} />
        {/* <Route path="/todo/:id" element={<Task/>}/> */}
        <Route path="/todo/edit" element={<UpdateTask />} />
      </Routes>
    </div>
  );
}

export default App;
