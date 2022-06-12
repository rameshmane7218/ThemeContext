import {
  Avatar,
  Box,
  Center,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Article = () => {
  return (
    <Container maxW={"3xl"} pb={"4rem"}>
      <Box textAlign="center" py={{ base: 5, md: 10 }}>
        <Avatar
          name="Dan Abrahmov"
          size="lg"
          src="https://bit.ly/dan-abramov"
        />
        <Text fontSize="lg">Masai School</Text>
        <Text>11/06/2022</Text>
      </Box>
      <Center textAlign="center">
        <Stack>
          <Heading>
            Your most unhappy customers are your greatest source of learning
          </Heading>
          <Text fontSize="lg">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Text>
          <Box>
            <Image
              rounded={"lg"}
              src={
                "https://preview.colorlib.com/theme/magdesign/images/ximg_2.jpg.pagespeed.ic.fbbBEgB1Q6.webp"
              }
              alt="Thumbnail Image"
            />
          </Box>
          <Box textAlign="left">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
            <br />A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country, in
            which roasted parts of sentences fly into your mouth.
            <br />
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </Box>
        </Stack>
      </Center>
    </Container>
  );
};

export default Article;
