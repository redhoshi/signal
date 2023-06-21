import React, { useRef, useEffect, useCallback } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const About = () => {
  const mapContainerRef = useRef(null);

  const resizeMap = useCallback(() => {
    const { current: mapContainer } = mapContainerRef;
    if (mapContainer) {
      const { width, height } = mapContainer.getBoundingClientRect();
      // mapのサイズ決め
      if (width > 700) {
        mapContainer.style.width = `${width * 1.0}px`;
      } else {
        mapContainer.style.width = `${width * 1.2}px`;
      }
    }
  }, []);

  useEffect(() => {
    resizeMap();

    window.addEventListener("resize", resizeMap);
    return () => {
      window.removeEventListener("resize", resizeMap);
    };
  }, [resizeMap]);

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={9}
      width="100%"
      height="500px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <div
        id="About"
        style={{ width: "100%", height: "100%" }}
        ref={mapContainerRef}
      >
        <h1
          style={{
            fontSize: "50px",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "5%",
            paddingBlockEnd: "5%",
          }}
        >
          World
        </h1>
        <div className="fold">
          <ComposableMap
            projection="geoMercator"
            style={{ width: "100%", height: "100%" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  // geo.propertiesで属性を見れる
                  const isJapan = geo.properties.name === "Japan";
                  const isGermany = geo.properties.name === "Germany";
                  const countryColor = isJapan ? "green" : isGermany ? "green" : "gray";
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default: {
                          fill: countryColor,
                          stroke: "#fff",
                          strokeWidth: 0.5,
                        },
                        hover: {
                          fill: countryColor,
                          stroke: "#fff",
                          strokeWidth: 0.5,
                        },
                        pressed: {
                          fill: countryColor,
                          stroke: "#fff",
                          strokeWidth: 0.5,
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </Box>
  );
};

export default About;
