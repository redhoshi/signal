import React from "react";
import { Box, Flex, Text, Avatar, Heading, Stack, Divider, ButtonGroup, IconButton, Image, Button } from "@chakra-ui/react";
import Graph from '../Components/Graph';
import { FaQuestionCircle } from "react-icons/fa";

const Survey = () => {

  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 }
];


  return (
    <div id="Survey" style={{height:"", paddingBlockEnd:"0%" }}>
    <h1 style={{fontSize:"50px",paddingLeft:"10%",paddingRight:"10%",paddingTop:"5%",paddingBlockEnd:"5%"}}>
      Survey
      </h1>
      <h2></h2>
      <p>20歳から26歳の男女24名を対象にデポジット制度と日常生活における環境保全に関する調査を行いました。</p>
      <Divider></Divider><br></br>
      <Graph/>
    </div>
  );
};

export default Survey;
