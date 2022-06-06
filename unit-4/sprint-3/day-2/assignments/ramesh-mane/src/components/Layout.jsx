import React from "react";
import {
  Container,
  Grid,
  GridItem,
  Button,
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Badge,
  Flex,
} from "@chakra-ui/react";
import Product from "../pages/Product";
const Layout = ({ products }) => {
  console.log("producst", products);
  const IMAGE =
    "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";
  return (
    <Container maxW="6xl">
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products.map((data) =>
          //   <Product data={data}/>
          console.log(data)
          // <Text>{data.title}</Text>
        )}
        <Center py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${IMAGE})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={IMAGE}
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                // color={"gray.500"}
                fontSize={"md"}
                // textTransform={"uppercase"}
              >
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
              </Text>
              {/* <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                Nice Chair, pink
              </Heading> */}
              <Flex
                align={"center"}
                justifyContent="space-between"
                gap={"85px"}
              >
                <Badge colorScheme="green">
                  <i className="fa-solid fa-star"></i> 4.3
                </Badge>
                <Text fontWeight={800} fontSize={"md"}>
                  Rs. 117
                </Text>
              </Flex>
            </Stack>
          </Box>
        </Center>
      </Grid>
    </Container>
  );
};

export default Layout;
