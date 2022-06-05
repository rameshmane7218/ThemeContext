import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterLink = styled.p`
  cursor: pointer;
  font-size: 16px;
  margin: 0;
`;

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Heading textAlign="left" color={"orange.400"}>
                ShopNow
              </Heading>
            </Box>
            <Text fontSize={"sm"} textAlign="left">
              © 2022 ShopNow. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <FooterLink>About us</FooterLink>
            <FooterLink>Blog</FooterLink>
            <Link to="/contactus">Contact us</Link>
            <Link to="/faq">FAQ</Link>
            <FooterLink>Job opportunities</FooterLink>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <FooterLink>Help Center</FooterLink>
            <FooterLink>Terms of Service</FooterLink>
            <FooterLink>Legal</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Status</FooterLink>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
