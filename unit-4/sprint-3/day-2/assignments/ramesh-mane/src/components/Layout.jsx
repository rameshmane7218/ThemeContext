import React from "react";
import {Link,useLocation} from 'react-router-dom';
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

const Layout = ({ products }) => {
  // console.log("producst", products);
  const {pathname} = useLocation();
  // console.log("pathname",pathname);
  
  const IMAGE =
    "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";
  return (
    <Container maxW="6xl">
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products.map((data) => (
          <Link to={`${pathname}/${data.id}`} key={data.id}>
            <Center py={12} key={data.id}  height="100%">
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                h={"full"}
                // bg={useColorModeValue("white", "gray.800")}
                bg="white"
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
                height="100%"
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
                    backgroundImage: `url(${data.image})`,
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
                    src={data.image}
                  />
                </Box>
                <Stack pt={10} align={"center"}>
                  <Text
                    // color={"gray.500"}
                    fontSize={"md"}
                    // textTransform={"uppercase"}
                  >
                    {data.title}
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
                      <i className="fa-solid fa-star"></i> {data.rating.rate}
                    </Badge>
                    <Text fontWeight={800} fontSize={"md"}>
                      Rs. {data.price}
                    </Text>
                  </Flex>
                </Stack>
              </Box>
            </Center>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export default Layout;
