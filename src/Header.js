import { Center, Stack, Image } from "@chakra-ui/react";
import './Header.css';
import React from "react";
import Nav from "./Nav";

const Header = () => {
    return (
      <Center as='header' mt="1rem">
        <Stack gap="20" direction={{ base: "column", md: "row" }} align="center">
          <Image src="logo/banner_lemon_yellow.png" alt="Little Lemon Logo" height="70px"></Image>
          <Nav direction="row"/>
        </Stack>
      </Center>
    );
};

export default Header;