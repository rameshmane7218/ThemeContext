
import React, { useReducer, useState } from "react";

// function Usereducer() {
//   // const [counter, setCounter] = useState({});
//   //if initial state is undefined the react is controlling value

//   const [counter, setCounter] = useState({value:1});
//   // if not the we need to controll the value otherwise it will show an worning error tha changing state from controlled to uncontrolled state like that

//   const handleChange = (e)=>{
//     setCounter(e.target.value);
//   }
//   return (
//     <div className="App">
//       {/* React is controlling the value  */}
//       {/* <input type="text" onChange={handleChange}></input> */}

//       {/* Ramesh is controlling the input element  */}
//       <input type="text" value={counter.value} onChange={handleChange}></input>
//     </div>
//   );
// }

// export default App;

// // method 2

// const reducer = (counter, action) => {
//   switch ((action.type)) {
//     case "INCREMENT": {
//       return counter + 1;
//     }
//     case "DECREMENT": {
//       return counter - 1;
//     }
//     default : {
//       ocnsole.log("Type incorrect", action.type)
//       return counter;
//     }
//   }
// };

// function Usereducer() {
//   // const [counter, setCounter] = useState(0);
//   const [counter, dispatch] = useReducer(reducer, 0);

//   return (
//     <div className="App">
//       {/* React is controlling the value  */}
//       {/* Ramesh is controlling the input element  */}
//       Counter: {counter}
//       <div>
//         <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
//         <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
//       </div>
//     </div>
//   );
// }

// Method 3: added payload

const reducer = (state, {type , payload}) => {
  switch (type) {
    case "INCREMENT": {
      return state + payload;
      
    }
    case "DECREMENT": {
      return state - payload;
    }
    default : {
      console.log("Type incorrect", type)
      return state;
    }
  }
};

function Usereducer() {
  // const [counter, setCounter] = useState(0);
  const [counter, dispatch] = useReducer(reducer, 0);

  // need a state variable with initial value = 0;
  // need a single place where this state changes can be monitored 

  return (
    <div className="App">
      {/* React is controlling the value  */}
      {/* Ramesh is controlling the input element  */}
      Counter: {counter}
      <div>
        <button onClick={() => dispatch({ type: "DECREMENT",payload:1 })}>-</button>
        <button onClick={() => dispatch({ type: "INCREMENT",payload:100 })}>+</button>
      </div>
    </div>
  );
}

export default Usereducer;
