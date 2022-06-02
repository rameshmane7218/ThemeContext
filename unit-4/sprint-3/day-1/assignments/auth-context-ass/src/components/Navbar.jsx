import {
  Box,
  Button,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const {isAuth,logout} = useContext(AuthContext);
  return (
    <Box>
      <Flex
        justify={"space-around"}
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Link to="/">
          <Heading size="lg">Logo</Heading>
        </Link>
       {isAuth?( <Link to="/">
          <Button
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"teal.400"}
            _hover={{
              bg: "teal.300",
            }}
            onClick={()=>logout()}
          >
            {isAuth?"Logout":"Login"}
          </Button>
        </Link>):( <Link to="/login">
          <Button
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"teal.400"}
            _hover={{
              bg: "teal.300",
            }}
            onClick={()=>logout()}
          >
            {isAuth?"Logout":"Login"}
          </Button>
        </Link>)}
      </Flex>
    </Box>
  );
};

export default Navbar;
