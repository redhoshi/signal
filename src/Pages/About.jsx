import React from "react";
import {
  Box,
  useColorModeValue,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Box
    bg={useColorModeValue("gray.100", "gray.900")}
    px={9}
    width={["100%"]}
  >
    <div id="About" style={{height:"800px"}}>
      <h1 style={{fontSize:"50px",padding:"20%"}}>
        About
      </h1>
    </div>
    </Box>
  );
};

export default About;
