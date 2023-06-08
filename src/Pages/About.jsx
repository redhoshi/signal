import React from "react";
import {
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps"


const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const About = () => {
  return (
    <Box
    bg={useColorModeValue("gray.100", "gray.900")}
    px={9}
    width={["100%"]}
  >
    <div id="About" style={{height:"800px"}}>
      <h1 style={{fontSize:"50px",padding:"10%"}}>
        Japan / World
      </h1>
      <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
    </div>
    </Box>
  );
};

export default About;
