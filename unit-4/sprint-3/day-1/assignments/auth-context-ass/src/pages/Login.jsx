import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useRef } from "react";

const Login = () => {
  const { setToken, login } = useContext(AuthContext);
  const [loginCreds, setLoginCreds] = useState({});
  const toast = useToast();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(loginCreds);

    try {
      let res = await axios.post("https://reqres.in/api/login", loginCreds);
      console.log(res);

      setToken(res.data.token);
      login();

      toast({
        title: "Login Successful.",
        // description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err);
      // console.log(err.response.status);
      if (err.response.status == "400") {
        toast({
          title: "Login field.",
          description: `${err.response.data.error}`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    }
    // login();
  };
  return (
    <Box>
      <Flex
        minH={"90vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Login to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    onChange={handleOnChange}
                    placeholder="eve.holt@reqres.in"
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    name="password"
                    type="password"
                    onChange={handleOnChange}
                    placeholder="cityslicka"
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  ></Stack>
                  <Button
                    type="submit"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Login;
