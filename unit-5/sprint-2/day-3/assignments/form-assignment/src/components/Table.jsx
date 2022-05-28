import React from "react";
import styles from "./Table.module.css";
import TableItem from "./TableItem";
import axios from "axios";


const Table = ({employeeData,setEmployeeData,getData}) => {
  React.useEffect(() => {
    getData();
  },[])
  const handleDeleteItem = async (id)=>{
    await axios.delete(`http://localhost:8080/employeeData/${id}`);
    getData();
  }
  return (
    <div className={styles.table}>
        <h1>All Employee Details</h1>
      <table >
        <thead>
          <tr>
            <th>Profile Photo</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((data) =>(
            <TableItem key={data.id} data={data} handleDeleteItem={handleDeleteItem}/>
          ))}
           
           
        </tbody>
      </table>
    </div>
  );
};

export default Table;
