import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import TodoApp from "./pages/TodoApp";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todoapp" element={<TodoApp />} />
      </Routes>
    </div>
  );
}

export default App;
