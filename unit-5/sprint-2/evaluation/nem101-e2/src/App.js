import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import NotesPage from "./components/NotesPage";
import SignupPage from "./components/SignupPage";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
    </div>
  );
}

export default App;
