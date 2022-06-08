import React from "react";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Container,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  CloseIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";

import { Link } from "react-router-dom";
import styled from "styled-components";

const CartIcon = styled.i`
  font-size: 18px;
  cursor: pointer;
  margin-left: 10px;
`;
const navItems = [
  {
    label: "Clothes",
    children: [
      {
        label: "Men's Clothing",
        subLabel: "Trending Design to inspire you",
        to: "/mens_clothing",
      },
      {
        label: "Women's Clothing",
        subLabel: "Up-and-coming Designers",
        to: "/womens_clothing",
      },
      // {
      //   label: "Kids's Clothing",
      //   subLabel: "Up-and-coming Designers",
      //   to: "/kids_clothing",
      // },
    ],
  },
  // {
  //   label: "Shoes",
  //   children: [
  //     {
  //       label: "Men's Shoes",
  //       subLabel: "Trending Design to inspire you",
  //       to: "/mens_shoes",
  //     },
  //     {
  //       label: "Women's Shoes",
  //       subLabel: "New Design",
  //       to: "/womens_shoes",
  //     },
  //     {
  //       label: "Kids's Shoes",
  //       subLabel: "Trending Design to inspire you",
  //       to: "/kids_shoes",
  //     },
  //   ],
  // },
  {
    label: "Jewelery",
    to: "/jewelery",
  },
  {
    label: "Electronics",
    to: "/electronics",
  },
];
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [NAV_ITEMS, setNAV_ITEMS] = React.useState(navItems);
  // console.log(NAV_ITEMS);

  return (
    <Box
      style={{ position: "fixed", width: "100%", zIndex: "100000" }}
      bg={useColorModeValue("white", "gray.800")}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Container maxW={"7xl"}>
        <Flex
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
          justifyContent="space-between"
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
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
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              fontWeight="bold"
              fontSize="20px"
              color={useColorModeValue("orange.400", "white")}
            >
              <Link to="/">ShopNow</Link>
            </Text>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav NAV_ITEMS={NAV_ITEMS} />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Stack
              display={"flex"}
              alignItems="center"
              justifyContent="center"
              color={useColorModeValue("black", "white")}
            >
              <Link to="/cart">
                <CartIcon className="fa-solid fa-cart-shopping"></CartIcon>
              </Link>
            </Stack>
            <Button fontSize={"sm"} fontWeight={400}>
              Sign In
            </Button>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              _hover={{
                bg: "pink.300",
              }}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav NAV_ITEMS={NAV_ITEMS} />
        </Collapse>
      </Container>
    </Box>
  );
};

export default Navbar;

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//
// Desktop Navbar

const DesktopNav = ({ NAV_ITEMS }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  // console.log(NAV_ITEMS);

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              {navItem.to != undefined ? (
                <Text
                  p={2}
                  // href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  <Link to={navItem.to}>{navItem.label}</Link>
                </Text>
              ) :( 
                <Text
                  p={2}
                  // href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Text>)}
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//
// Desktop Sub Nav

const DesktopSubNav = ({ label, to, subLabel }) => {
  return (
    <Box
      // href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Link to={to}>
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "pink.400" }}
              fontWeight={500}
              textAlign="left"
            >
              {label}
            </Text>
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </Box>
  );
};

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//
// Mobile Nav
const MobileNav = ({ NAV_ITEMS }) => {
  // console.log("mobile",NAV_ITEMS);
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//
// Mobile Sub Nav

const MobileNavItem = ({ label, children, to }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Text key={child.label} py={2}>
                <Link to={child.to}>{child.label}</Link>
              </Text>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
