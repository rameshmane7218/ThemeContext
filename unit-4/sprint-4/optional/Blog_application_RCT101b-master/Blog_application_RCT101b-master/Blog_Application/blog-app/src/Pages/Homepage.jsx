import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const Homepage = () => {
  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 5, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Create content for <br />
          <Text
            as={"span"}
            position={"relative"}
            color={useColorModeValue("blue.600", "blue.200")}
            zIndex="2"
            _after={{
              content: "''",
              width: "full",
              height: "20%",
              position: "absolute",
              bottom: 4,
              left: 0,
              bg: useColorModeValue("blue.200", "blue.700"),
              zIndex: -1,
            }}
          >
            the World
          </Text>
        </Heading>
      </Stack>
    </Container>
  );
};

export default Homepage;
