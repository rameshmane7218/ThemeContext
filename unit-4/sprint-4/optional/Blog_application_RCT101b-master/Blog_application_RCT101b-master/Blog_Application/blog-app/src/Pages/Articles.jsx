import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

const Articles = () => {
  return (
    <Container maxW={"3xl"}>
      <Box textAlign="center" py={{ base: 2, md: 10 }}>
        <Heading>Trending</Heading>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default Articles;
