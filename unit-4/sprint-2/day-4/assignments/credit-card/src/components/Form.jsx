import React from "react";
import styles from "./Form.module.css";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

const Form = ({form, setForm, cardDetails, setCardDetails }) => {
  const handleOnChange = (e) => {
    let { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  // console.log(form);
  const handleOnSubmit = (e)=>{
    e.preventDefault();
    // console.log("submit event")
    setCardDetails(form)
  }
  // console.log("card",cardDetails);
  return (
    <Box marginTop="30px">
      <FormControl className={styles.formControl} onSubmit={handleOnSubmit}>
        <Heading as="h5" size="lg" marginBottom="10px">
          Payment Details
        </Heading>

        <FormLabel className={styles.formLabel}>CARDHOLDER NAME</FormLabel>
        <InputGroup className={styles.inputGroup}>
          <InputLeftElement
            pointerEvents="none"
            children={<i className="fa-solid fa-user-check"></i>}
          />

          <Input
            variant="flushed"
            id="name"
            type="text"
            size="sm"
            focusBorderColor="pink.400"
            name="name"
            onChange={handleOnChange}
          />
        </InputGroup>

        <FormLabel className={styles.formLabel}>CARD NUMBER</FormLabel>
        <InputGroup className={styles.inputGroup}>
          <InputLeftElement
            pointerEvents="none"
            children={<i className="fa-solid fa-credit-card"></i>}
          />

          <Input
            variant="flushed"
            id="name"
            type="text"
            size="sm"
            focusBorderColor="pink.400"
            name="cardNum"
            maxLength="19"
            onChange={handleOnChange}
          />
        </InputGroup>

        <Flex gap="20px">
          <Box>
            <FormLabel className={styles.formLabel}>EXPIRY MONTH</FormLabel>
            <InputGroup className={styles.inputGroup}>
              <InputLeftElement
                pointerEvents="none"
                children={<i className="fa-solid fa-calendar"></i>}
              />
              <Input
                variant="flushed"
                id="name"
                type="text"
                size="sm"
                width="130px"
                focusBorderColor="pink.400"
                name="month"
                maxLength="2"
                onChange={handleOnChange}
              />
            </InputGroup>
          </Box>
          <Box>
            <FormLabel className={styles.formLabel}>EXPIRY YEAR</FormLabel>
            <InputGroup className={styles.inputGroup}>
              <InputLeftElement
                pointerEvents="none"
                children={<i className="fa-solid fa-calendar"></i>}
              />

              <Input
                variant="flushed"
                id="name"
                type="text"
                size="sm"
                width="130px"
                focusBorderColor="pink.400"
                name="year"
                maxLength="2"
                onChange={handleOnChange}
              />
            </InputGroup>
          </Box>
          <Box>
            <FormLabel className={styles.formLabel}>CVC</FormLabel>
            <InputGroup className={styles.inputGroup}>
              <InputLeftElement
                pointerEvents="none"
                children={<i className="fa-solid fa-lock"></i>}
              />

              <Input
                variant="flushed"
                id="name"
                type="text"
                size="sm"
                width="130px"
                focusBorderColor="pink.400"
                name="cvv"
                maxLength="4"
                onChange={handleOnChange}
              />
            </InputGroup>
          </Box>
        </Flex>
       
        <Box className={styles.submitBtn}>
          <FormLabel className={styles.formLabel}>
            Payment Amount: <span>Rs 34323</span>
          </FormLabel>
          <Box>
          <Input
            type="submit"
            size="sm"
            width="130px"
            focusBorderColor="pink.200"
            bg="red.400"
            onClick={handleOnSubmit}
          />
        </Box>
        </Box>
        
      </FormControl>
    </Box>
  );
};

export default Form;
