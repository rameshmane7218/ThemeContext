import { FormLabel, Heading, Switch } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

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
  const { handleColorMode } = useContext(ThemeContext);
  return (
    <TitleDash>
      <div>
        <Heading fontWeight={500} size="xl">
          My Dashboard
        </Heading>
      </div>
      <ColorMode>
        <FormLabel htmlFor="switchMode" margin={0} size="sm">
          Dark Mode
        </FormLabel>
        <Switch
          defaultChecked={
            localStorage.getItem("chakra-ui-color-mode") == "dark"
          }
          size="lg"
          onChange={(e) => handleColorMode(e.target.checked)}
        />
      </ColorMode>
    </TitleDash>
  );
};

export default Dashboard;
