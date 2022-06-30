import {
  Box,
  Button,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import stats from "../assets/stats.svg";
const StyleColorMode = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      
      {/* <Button size="sm" onClick={toggleColorMode} bg="red">
        Toggle Mode
      </Button> */}
      
    </>
  );
};

export default StyleColorMode;
