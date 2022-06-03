import { Box, Button, Heading, useColorMode, useColorModeValue } from "@chakra-ui/react";

const StyleColorMode = () => {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#F5F6FA", "#1F2327");
  const color = useColorModeValue("white", "gray.800");

  return (
    <>
    
      <Box mb={4} bg={bg} color={color}>
        This box's style will change based on the color mode.
      </Box>
      <Button size="sm" onClick={toggleColorMode} bg="red">
        Toggle Mode
      </Button>
    </>
  );
};

export default StyleColorMode;