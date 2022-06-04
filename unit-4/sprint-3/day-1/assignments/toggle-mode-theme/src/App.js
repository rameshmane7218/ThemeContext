import logo from "./logo.svg";
import "./App.css";
import Logos from "./components/Dashboard.jsx";
import StyleColorMode from "./Theme/StyleColorMode";
import { Box, useColorModeValue } from "@chakra-ui/react";
import LeftMenu from "./components/LeftMenu";
import CenterDiv from "./components/CenterDiv";

function App() {
  return (
    <Box
      className="App"
      style={{
        position: "relative",
        width: "1240px",
        height: "100vh",
        margin: "auto",
        maxHeight: "1024px",
      }}
      bg={useColorModeValue("#F5F6FA", "#1F2327")}
    >
      <Logos />
      <LeftMenu />
      <div className="ScrollingDivMain">
        <div className="ScrollingDiv">
          <CenterDiv />
        </div>
      </div>
    </Box>
  );
}

export default App;
