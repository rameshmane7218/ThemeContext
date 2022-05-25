import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
import removelogo from "../../assets/remove.svg";

const Task = ({data,removeItem,completed,increament,decreament}) => {
  // NOTE: do not delete `data-cy` key value pair
  // console.log(data);
  const [isDisplay,setIsDisplay] = React.useState(false);
  
  const displayBtn = () =>{
    // console.log("Mouse hoverd on me")
    setIsDisplay(true);
  }
  const hideBtn = () =>{
    // console.log("Mouse leave")
    setIsDisplay(false);
  }

  return (
    <li data-cy="task" className={styles.task} onMouseOver={displayBtn} onMouseLeave={hideBtn}>
      <div className={styles.taskInfo}>
        <input type="checkbox" defaultChecked={data.done} data-cy="task-checkbox" onChange={()=>completed(data.id)} />
        <div data-cy="task-text" className={data.done?styles.strike:""}>
          {data.text}
        </div>
      </div>
      <div className={styles.taskCounter}>
        {/* Counter here */}
        <Counter data={data} increament={increament} decreament={decreament} />
        <button data-cy="task-remove-button" className={`${styles.removeBtn} ${isDisplay ? styles.displaybtn:""}`} title="Remover item" onClick={()=>removeItem(data.id)} >
          <img src={removelogo} alt="Remove Logo" />
        </button>
      </div>
    </li>
  );
};

export default Task;
