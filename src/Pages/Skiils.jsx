import React from "react";
import { Box, Flex, Text, Avatar, Heading, Stack, Divider, ButtonGroup, IconButton, Image, Button } from "@chakra-ui/react";
import Graph from '../Components/Graph';

const Skills = () => {
  return (
    <div id="Skills" style={{height:"800px", padding:"5%"}}>
    <h1 style={{fontSize:"50px",paddingLeft:"10%",paddingRight:"10%",paddingTop:"5%",paddingBlockEnd:"5%"}}>
      Workshop
      </h1>
      <Graph/>
    </div>
  );
};

export default Skills;
