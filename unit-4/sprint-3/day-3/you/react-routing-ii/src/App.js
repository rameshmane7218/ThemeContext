import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Feeds from "./pages/Feeds";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import RequireAuth from "./hoc/RequireAuth";
import Posts from "./pages/Posts";
import Careers from "./pages/Careers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/posts"
          element={
            <RequireAuth>
              <Posts />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/careers"
          element={
            <RequireAuth>
              <Careers />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/feeds"
          element={
            <RequireAuth>
              <Feeds />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;


//TODO 
// feeds page is not working 