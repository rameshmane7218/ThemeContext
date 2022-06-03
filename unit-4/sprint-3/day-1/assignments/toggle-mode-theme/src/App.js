import logo from './logo.svg';
import './App.css';
import Logos from './assets/Logos';
import StyleColorMode from './Theme/StyleColorMode';
import { Box, useColorModeValue } from '@chakra-ui/react';
import LeftMenu from './components/LeftMenu';

function App() {
  return (
    <Box className="App" style={{position:"relative", width:"1240px",height:"100vh", margin:"auto"}} bg={useColorModeValue("#F5F6FA","#1F2327")}>
      <Logos/>
      <StyleColorMode/>
      <LeftMenu/>
    <svg className="bi bi-bar-chart-line" fill="red" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/></svg>
    </Box>
  );
}

export default App;
