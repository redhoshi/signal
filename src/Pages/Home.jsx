import React from "react";
import { Card,  CardHeader, CardBody, CardFooter, Center } from '@chakra-ui/react'
import { Box, Flex, Text, Avatar, Heading, Stack, Divider, ButtonGroup, IconButton, Image, Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <div id="Home" style={{height:"",paddingBlockEnd:"5%"}}>
      <h1 style={{fontSize:"50px",paddingLeft:"10%",paddingRight:"10%",paddingTop:"5%",paddingBlockEnd:"5%"}}>
        Concept
      </h1>
      <div class="fold">
        <div class="Card_size">
              <Image
              borderRadius='full'
              boxSize='250px'
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
              />
          </div>
          <div class="Card_size">
            <p>これはテストです。これはテストです。</p>
            <p>これはテストです。これはテストです。</p>
            <p>これはテストです。これはテストです。</p>
          </div>
      </div>

      <p style={{paddingLeft:"10%",paddingRight:"10%"}}>
      </p>
    </div>
  );
};

export default Home;
