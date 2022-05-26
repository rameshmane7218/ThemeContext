import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import React from 'react'

function App() {
  const [startTime, setStartTime] = React.useState(0);
  const [endTime, setEndTime] = React.useState(10);
 
  return (
    <div className="App">
      <Timer startTime={startTime} endTime={endTime}/>
    </div>
  );
}

export default App;
