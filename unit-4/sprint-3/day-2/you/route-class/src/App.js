import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/*" element={<Products />}>
          <Route path=":id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// is not mandatory
// for nested info we need 3 changes
// 1. parent child with parent and remove duplicate path info
// 2. Wrap child with parent and remove duplicate path info
