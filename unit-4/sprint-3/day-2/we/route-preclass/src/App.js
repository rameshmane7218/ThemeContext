import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Products } from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/about"} element={<About/>}></Route>
        <Route path={"/products"} element={<Products/>}></Route>
        <Route path={"/products/:id"} element={<Products/>}></Route>
        
      </Routes>
      
      
    </div>
  );
}

export default App;
