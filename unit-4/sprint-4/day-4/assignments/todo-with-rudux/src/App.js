import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import {Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        
      </Routes>
      {/* <SignUp/> */}
    
    </div>
  );
}

export default App;
