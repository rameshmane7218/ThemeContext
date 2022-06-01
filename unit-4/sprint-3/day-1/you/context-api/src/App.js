import React, { useContext } from "react";
import "./App.css";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

const App = () => {
  const {isLight} = useContext();
  return (
    <div className={isLight?"dark":"light"}>
      <Navbar />
      <Body />
    </div>
  );
};

export default App;
