// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Todo from "./components/Todo";

// function App() {
//   const [count1,setCount1] = React.useState(0);
//   const [count2,setCount2] = React.useState(0);
//   // console.log(1);
//   // React.useEffect(() => {
//   //   console.log("inside 1");
//   // });
//   // //if we havent gave callback function then useEffect will run all time when we refresh, update data.
//   React.useEffect(() => {
//     console.log("inside 1");
//   },[]);
//   // if we pass empty array then it will run only once 

//   // React.useEffect(()=>{
//   //   console.log("inside 2");
//   // })

//   // console.log(2);

//   // const [showComp, setShowComp] = React.useState(false);
//   // let a = <div> Component A</div>
//   // let b = <div> Component B</div>

//   // let A = () => <div> Component A</div>;
//   // let B = () => <div> Component B</div>;

//   // return (
//   //   <div
//   //     className="App"
//   //     onClick={() =>
//   //       // setCount(count + 1)
//   //       setShowComp(!showComp)
//   //     }
//   //   >
//   //     Hello
//   //     {/* {count} */}
//   //     {/* {showComp ? a:b} */}
//   //     {showComp ? <A /> : <B />}
//   //     {/* here we have mounted component a and b and we are updating component onClick event */}
//   //   </div>
//   // );
//   return (
//     <div>
//       <div className="App" onClick={()=>setCount1(count1+1)}>
//         Hello:{count1}  
//       </div>

//       <div className="App" onClick={()=>setCount2(count2+1)}>
//         Hello:{count2}  
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from 'react'

const App = () => {

 


  return (
    <div className="App">
      {/* App */}
      <Todo/>
    </div>
  )
}

export default App
