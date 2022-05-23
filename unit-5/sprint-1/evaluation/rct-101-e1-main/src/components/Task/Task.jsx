import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
import removelogo from "../../assets/remove.svg";

const Task = ({data,removeItem,completed,increament,decreament}) => {
  // NOTE: do not delete `data-cy` key value pair
  // console.log(data);
  const [isCompleted,setIscompleted] = React.useState(data.done)
  const isComp = (e)=>{
    // console.log(e.target.checked);
    setIscompleted(e.target.checked)
    console.log("data",data);
   
  }

  return (
    <li data-cy="task" className={styles.task}>
      <div className={styles.taskInfo}>
        <input type="checkbox" defaultChecked={data.done} data-cy="task-checkbox" onChange={()=>completed(data.id)} />
        <div data-cy="task-text" className={data.done?styles.strike:""}>
          {data.text}
        </div>
      </div>
      <div className={styles.taskCounter}>
        {/* Counter here */}
        <Counter data={data} increament={increament} decreament={decreament} />
        <button data-cy="task-remove-button" className={styles.removeBtn} title="Remover item" onClick={()=>removeItem(data.id)}>
          <img src={removelogo} alt="Remove Logo" />
        </button>
      </div>
    </li>
  );
};

export default Task;
