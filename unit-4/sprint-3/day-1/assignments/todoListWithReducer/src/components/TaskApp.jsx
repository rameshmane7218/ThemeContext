import React from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";
import { TaskHeader } from "./TaskHeader";
import { Tasks } from "./Tasks";
import data from "../data/tasks.json";


const TaskApp = () => {
  // const [todo, setTodo] = React.useState("")
  const [task, setTask] = React.useState(data);
  // NOTE: do not delete `data-cy` key value pair
  const removeItem = (value)=>{
    let newTask = task.filter((todo)=>(todo.id != value))
    setTask(newTask);
  }
  const completed = (value)=>{
    // console.log("completed",value);
    let newTodo = task.map((todo)=>{
      if(todo.id === value){
        let pre = todo.done;
        todo.done = !pre;
        // console.log("hurray",todo);
      }
      return todo;
    })
    // console.log(newTodo);
    setTask(newTodo);
  }
  const  increament = (value) =>{
    let newTodo = task.map((todo)=>{
      if(todo.id === value){
        let preCount = todo.count;
        todo.count = preCount+1;
        // console.log("hurray",todo);
      }
      return todo;
    })
    // console.log(newTodo);
    setTask(newTodo);
  }
  const  decreament = (value) =>{
    let newTodo = task.map((todo)=>{
      if(todo.id === value){
        let preCount = todo.count;
        if(preCount === 1){
          todo.count = preCount;
        }else{
          todo.count = preCount-1;
        }
        // console.log("hurray",todo);
      }
      return todo;
    })
    // console.log(newTodo);
    setTask(newTodo);
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader data={task} />
      {/* Add Task */}
      <AddTask data={task} setData={setTask}/>
      {/* Tasks */}
      <Tasks data={task} removeItem={removeItem} completed={completed}  increament={increament} decreament={decreament} />
    </div>
  
  );
};

export default TaskApp;

