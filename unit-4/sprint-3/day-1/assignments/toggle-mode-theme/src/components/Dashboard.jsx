import {
  FormLabel,
  Heading,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const TitleDash = styled.div`
  width: 452px;
  position: absolute;
  top: 28px;
  left: 122px;
  display: flex;
  justify-content: space-between;
`;
const ColorMode = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;

const Dashboard = () => {
  const { colorMode, setColorMode, toggleColorMode } = useColorMode();
  const handleColorMode = (e) => {
    console.log("color mode", e.target.checked, colorMode);
    if (e.target.checked) {
      setColorMode("dark");
      
    } else {
      setColorMode("light");
      
    }
    console.log(typeof localStorage.getItem("theme"));
  };
  return (
    <TitleDash>
      <div>
        <Heading fontWeight={500} size='xl' >My Dashboard</Heading>
      </div>
      <ColorMode>
        <FormLabel htmlFor="switchMode" margin={0} size="sm">
          Dark Mode
        </FormLabel>
        <Switch
          defaultChecked={localStorage.getItem("chakra-ui-color-mode") == "dark"}
          size="lg"
          onChange={handleColorMode}
        />
      </ColorMode>
    </TitleDash>
  );
};

export default Dashboard;
