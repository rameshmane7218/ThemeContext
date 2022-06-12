import {
  Box,
  Center,
  Container,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  Collapse,
  Heading,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const navigate = useNavigate();
  const linkHandler = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("whiteAlpha.900", "blackAlpha.300")}
        color={useColorModeValue("gray.500", "gray.200")}
        maxH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Container maxW="container.xl">
          <Flex>
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
              alignItems="center"
            >
              <IconButton
                onClick={onToggle}
                _focus={{
                  boxShadow: "none",
                }}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
            <Flex
              flex={{ base: 1 }}
              justify={{ base: "center", md: "center" }}
              alignItems="center"
              paddingLeft={useBreakpointValue({ base: "0px", md: "80px" })}
            >
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                color={useColorModeValue("gray.800", "white")}
              >
                <Heading size="md">BLOG APPLICATION</Heading>
              </Text>
              <Center>
                <Flex display={{ base: "none", md: "flex" }} ml={10}>
                  {/* TODO */}

                  {/* {links.map((link) => (
                    <NavbarLink key={link.link} address={link.address}>
                      {link.link}
                    </NavbarLink>
                  ))} */}
                </Flex>
              </Center>
            </Flex>

            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              <ColorModeSwitcher justifySelf="flex-end" />
              {/* <Profile /> */}
            </Stack>
          </Flex>
        </Container>
      </Flex>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Contents</DrawerHeader>
          <DrawerBody>
            <Text
              fontSize="xl"
              onClick={() => linkHandler("/articles")}
              cursor="pointer"
            >
              Articles
            </Text>

            <Text
              fontSize="xl"
              onClick={() => linkHandler("/create")}
              cursor="pointer"
            >
              Create Article
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
