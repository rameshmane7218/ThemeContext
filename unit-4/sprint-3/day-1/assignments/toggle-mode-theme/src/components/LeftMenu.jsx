import {
  Box,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

const MenuBar = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  // border: 1px solid blue;
  max-height: 1024px;
  max-width: 81px;
`;
const LogoDiv = styled.div`
  // width: 90px;
  height: 70px;
  // border: 1px solid red;
  border-radius: 5px;
  // background: linear-gradient(180deg, #679cf6 0%, #4072ee 100%);
  // box-shadow: 0px 5px 15px #acb2c1;
  // transform: matrix(-1, 0, 0, 1, 0, 0);
  border-radius: 0 5px 5px 0;
  // color:white;
  cursor:pointer;
`;
const LogoDivInner = styled.div`
  width: 81px;
  max-width: 81px;
  height: 70px;
  // border: 1px solid red;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;

`;
const Profile = styled.div`
  // border: 1px solid green;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin: auto;
  background-image: url("https://cutt.ly/sJbIgmc");
  background-size: cover;
  position: relative;
`;
const OnlineStatus = styled.i`
  color: white;
  border-radius: 50px;
  font-size: 16px;
  background-color: #29cb97;
  position: absolute;
  top: -5px;
  right: 0;
`;
const AddNew = styled.i`
  color: #29cb97;
  border-radius: 50px;
  font-size: 32px;
  background-color: white;

`;
const MenuDevider = styled.div`
  // border-top: 1px solid #E8F0F8;
  border-bottom: 1px solid #E8F0F8;
  box-sizing: content-box;
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftMenu = () => {

  const [selected, setSelected] = useState("stats");

  const logos = [
    { class: "fa-chart-simple",id:"stats" },
    { class: "fa-signs-post",id:"maps" },
    { class: "fa-basket-shopping", id:"shopping" },
    { class: "fa-message", id:"message" },
    { class: "fa-file", id:"file" },
    { class: "fa-gear", id:"settings" },
  ];

  return (
    <MenuBar
      width="81px"
      height="100vh"
      maxHeight="1024px"
      
    >
      <Box bg={useColorModeValue("#FFFFFF", "#16191C")} height="100%" boxShadow={`0px 0px 5px ${useColorModeValue("#E5E9F2","none")}`}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            // border: "1px solid red",
            
            height: "100%",
            paddingTop:"10px",
            paddingBottom:"8px"
          }}
        >
          <div>
            <LogoDivInner>
              <Profile>
                <OnlineStatus className="fa-solid fa-circle-dot "></OnlineStatus>
              </Profile>
            </LogoDivInner>
          </div>
          <div>
            <Flex justifyContent="space-between" flexDirection="column">
              {logos.map((logo) => (
                <LogoDiv onClick={()=>setSelected(logo.id)} key={logo.id} className={selected == logo.id ? "selectedMenu":""} >
                  <LogoDivInner>
                    <MenuDevider>
                      <i
                        className={`fa-solid ${logo.class}`}
                        style={{ fontSize: "20px", color:selected == logo.id ? "#ffffff": "#dadada" }}
                      ></i>
                    </MenuDevider>
                  </LogoDivInner>
                </LogoDiv>
              ))}
            </Flex>
          </div>
          <div>
            <LogoDivInner>
              <AddNew className="fa-solid fa-circle-plus"></AddNew>
            </LogoDivInner>
          </div>
        </div>
      </Box>
    </MenuBar>
  );
};

export default LeftMenu;
