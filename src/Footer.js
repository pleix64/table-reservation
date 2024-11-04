import { Box, Center, Stack, Grid, Image } from "@chakra-ui/react";
import './Footer.css';
import React from "react";
import Nav from "./Nav";

const Footer = (props) => {
    return (
      <Grid as="footer"
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        templateRows={{ base: "repeat(2, 1fr)", md: "1fr"}}
        gap="5"
        width="100vw"
      >
        <Center border="2px solid blue" align="center">
          <Image
            src="logo/vertical_lemon_green.png"
            alt="Little Lemon Footer Logo"
            height="180px"
            fit="contain"
          />
        </Center>
        <Stack border="2px solid #66ccff">
          <Box>Doormat Navigation</Box>
          <Nav />
        </Stack>
        <Stack border="2px solid cyan">
          <Box>Contact</Box>
        </Stack>
        <Stack border="2px solid green">
          <Box>Social Media Links</Box>
        </Stack>
      </Grid>
    );
};

export default Footer;