import {
  Box,
  Flex,
  Image,
  Progress,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const Dashboard = styled.div`
  height: 514px;
  width: 452px;
  position: absolute;
  // top: 113px;
  top:0;
  left: 122px;
  left:0;
  // border: 1px solid red;
  border-radius: 5px;
  background-color: transperent;
`;
const UserName = styled.p`
  margin: 0;
  // color:#31394D;
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  // margin-top:0 !important;
`;
const Location = styled.p`
  margin: 0;
  color: #748aa1;
  font-size: 12px;
  margin-top: 0 !important;
  text-align: left;
`;
const UserMore = styled.p`
  margin: 0;
  color: #dadada;
  font-size: 16px;
  margin-top: 0 !important;
  text-align: left;
  letter-spacing: 2px;
`;
const CenterDiv = () => {
  const ActiveUsers = [
    {
      id:1,
      name: "Elon Tusk",
      location: "California, USA",
      pic: "https://bit.ly/dan-abramov",
      level: 15,
      points: 4723,
      bgColor: "green",
    },
    {
      id:2,
      name: "Sandhya",
      location: "Banglore, India",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9mB7KbgRmJuh7-N52jvuJ0F0x1PdGKzb5Q&usqp=CAU",
      level: 11,
      points: 2339,
      bgColor: "messenger",
    },
    {
      id:3,
      name: "Nrupul Dev",
      location: "Banglore, India",
      pic: "https://bit.ly/dan-abramov",
      level: 6,
      points: 1884,
      bgColor: "purple",
    },
  ];

  let divider = useColorModeValue("#EBEDF4","#33393F");
  return (
    <Dashboard>
      <Box
        bg={useColorModeValue("#FFFFFF", "#292E33")}
        boxShadow={useColorModeValue(
          "0px 1px 4px #E5E9F2",
          "0px 1px 4px rgba(0, 0, 0, 0.2)"
        )}
        width="100%"
        boxSizing="borderBox"
        borderRadius="5px"
        pt='30px'
        className="useBox"


      >
        <Flex justifyContent="space-between" pl="30px" pr="30px">
          <Text fontSize="xl">Active Users </Text>

          <Flex gap={2}>
            <Text color="gray">for</Text>
            <Text>August 2020 </Text>
          </Flex>
        </Flex>
        {ActiveUsers.map((user) => (
          <Flex
            key={user.id}
            flexDirection="column"
            gap={2}
            p="25px 30px"
            borderBottom={`1px solid ${divider}`}
          >
            <Flex justifyContent="space-between">
              <Flex gap={3}>
                <Image
                  borderRadius="full"
                  boxSize="40px"
                  src={user.pic}
                  alt="user"
                />
                <Stack>
                  <UserName>{user.name}</UserName>
                  <Location>{user.location}</Location>
                </Stack>
              </Flex>
              <UserMore>...</UserMore>
            </Flex>

            <Progress value={user.level} max={20} size="xs" colorScheme={user.bgColor} />

            <Flex justifyContent="space-between">
              <div>Profetional Level {user.level}</div>
              <div>
                <b>{user.points} Points</b>
              </div>
            </Flex>
          </Flex>
        ))}
        
      </Box>
    </Dashboard>
  );
};

export default CenterDiv;
