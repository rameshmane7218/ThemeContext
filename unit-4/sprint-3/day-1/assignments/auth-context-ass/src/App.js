import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Box, useColorModeValue } from '@chakra-ui/react';

function App() {
  return (
    <Box className="App"  bg={useColorModeValue("gray.50", "gray.800")} h="100vh">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     
    </Box>
  );
}

export default App;
