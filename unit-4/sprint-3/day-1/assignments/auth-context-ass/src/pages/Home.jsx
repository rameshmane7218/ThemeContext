import { Box, Heading, Link } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { token, isAuth } = useContext(AuthContext);
  return (
    <Box mt={20}>
      {isAuth ? (
        <Box>
          <Heading mb={4}>Hurray!! You have successfully logged in </Heading>
          <Heading>Your Token is: <Link color={"blue.400"}>{token}</Link> </Heading>
        </Box>
      ) : (
        <Heading>You have not logged in yet</Heading>
      )}
    </Box>
  );
};

export default Home;
