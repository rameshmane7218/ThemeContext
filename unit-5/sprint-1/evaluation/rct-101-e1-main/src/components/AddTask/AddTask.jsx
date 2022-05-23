import React from "react";
import styles from "./addTask.module.css";
import {v4 as uuidv4} from "uuid";

const AddTask = ({data,setData,todo,setTodo}) => {
  // NOTE: do not delete `data-cy` key value pair
 
  const handleInput = (e)=>{
    // console.log(e.target.value);
    setTodo(e.target.value)
  }

  const addTodo = (value)=>{
    // console.log(value);
    let flag = true;
    if(value.trim()==""){
      flag =false
    }
    let ans = data.filter((data)=>{
      if(data.text == value){
        flag = false;
        return false;
      }
    })
    // console.log(flag);
    if(flag){
      setData([
        ...data,
        {
          id:uuidv4(),
          text:value,
          done:false,
          count:1
        }
      ])
    }
  }
  // console.log(todo);
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" placeholder="Add Task..." onChange={handleInput}/>
      <button data-cy="add-task-button" onClick={()=>addTodo(todo)}>+</button>
    </div>
  );
};

export default AddTask;
