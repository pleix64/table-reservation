import { Center, Stack, Grid, Image } from "@chakra-ui/react";
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
          Doormat Navigation
          <Nav />
        </Stack>
        <Stack border="2px solid cyan">
          Contact
        </Stack>
        <Stack border="2px solid green">
          Social Media Links
        </Stack>
      </Grid>
    );
};

export default Footer;