import React, { useContext } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
import removelogo from "../../assets/remove.svg";
import { ReducerContext } from "../../context/ReducerContext";

const Task = ({data}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [isDisplay,setIsDisplay] = React.useState(false);
  const {setTask} = useContext(ReducerContext);
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
        <input type="checkbox" defaultChecked={data.done} data-cy="task-checkbox" onChange={()=>setTask({type:"ToggleStatus", id:data.id, payload:data.done})} />
        <div data-cy="task-text" className={data.done?styles.strike:""}>
          {data.text}
        </div>
      </div>
      <div className={styles.taskCounter}>
        {/* Counter here */}
        <Counter data={data} />
        <button data-cy="task-remove-button" className={`${styles.removeBtn} ${isDisplay ? styles.displaybtn:""}`} title="Remover item" onClick={()=>setTask({type:"removeItem", id:data.id})} >
          <img src={removelogo} alt="Remove Logo" />
        </button>
      </div>
    </li>
  );
};

export default Task;
