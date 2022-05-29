import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import CreditCard from "./components/CreditCard";
import { Box, Flex } from "@chakra-ui/react";
import React from 'react';

function App() {

  const [form, setForm] = React.useState({
    name:"Ramesh Mane",
    cardNum:"1234 5678 1234 5678",
    month:"09",
    year:"25",
    cvv:"1234"
  });
  const [cardDetails, setCardDetails] = React.useState([]);
  return (
    <Box
      margin="auto"
      display="flex"
      justifyContent="space-evenly"
      boxSizing="border-box"
      alignItems="center"
      height="100vh"
    >
      <CreditCard form={form} />
      <Form form={form} setForm={setForm} cardDetails={cardDetails} setCardDetails={setCardDetails}/>
    </Box>
  );
}

export default App;
