import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import React from 'react';
import axios from 'axios';

function App() {
  const [employeeData, setEmployeeData] = React.useState([]);

  const getData = async () => {
    try {
      let res = await axios.get("http://localhost:8080/employeeData");
      // console.log("axios", res.data);
      setEmployeeData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
     <Form employeeData={employeeData} setEmployeeData={setEmployeeData} getData={getData}/>
     <Table getData={getData} employeeData={employeeData} setEmployeeData={setEmployeeData}/>
    </div>
  );
}

export default App;
