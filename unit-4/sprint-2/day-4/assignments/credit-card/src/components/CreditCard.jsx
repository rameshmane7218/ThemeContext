import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./CreditCard.module.css";
import Form from "./Form";
const CreditCard = ({ form }) => {
  return (
    <Box className={styles.cardDiv}>
      <Box>
        <Box>
          <Heading>VISA</Heading>
        </Box>
        <Img src="https://www.svgrepo.com/show/356961/sim-card-chip.svg"></Img>
        <Text  fontSize="3xl">{form.cardNum}</Text>
        <br />
        <Flex className={styles.cardBotton} gap="40px">
          <Box>
            <Text>CARD HOLDER</Text>
            <Box>{form.name}</Box>
          </Box>
          <Box>
            <Text>EXPIRY</Text>
            <Box>
              {form.month}/{form.year}
            </Box>
          </Box>
          <Box>
            <Text>CVC</Text>
            <Box>{form.cvv}</Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CreditCard;
