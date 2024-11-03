import { Center, Stack, Image } from "@chakra-ui/react";
import './Header.css';
import React from "react";
import Nav from "./Nav";

const Header = (props) => {
    return (
      <Center as='header'>
        <Stack gap="20" direction={{ base: "column", md: "row" }}>
          <Image src="logo/banner_lemon_yellow.png" alt="Little Lemon Logo" height="80px"></Image>
          <Nav direction="row"/>
        </Stack>
      </Center>
    );
};

export default Header;