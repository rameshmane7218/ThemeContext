import React from "react";
import { TodoInput } from "./Components/TodoInput";
import { TodoList } from "./Components/TodoList";
import { Routes } from "./Routes/Routes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}
