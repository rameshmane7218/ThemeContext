import React from 'react'
import axios from 'axios';
const TableItem = ({data,handleDeleteItem}) => {

  return (
    <tr>
        <td><img src={data.profilePhoto} alt="" /></td> 
        <td>{data.name}</td>
        <td>{data.age}</td>
        <td>{data.address}</td>
        <td>{data.department}</td>
        <td>{data.salary}</td>
        <td>{data.maritalStatus}</td>
        <td><i className="fa-solid fa-trash-can" onClick={()=>handleDeleteItem(data.id)}></i></td>
    </tr>
  )
}

export default TableItem