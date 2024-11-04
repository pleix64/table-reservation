import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";

const Main = (props) => {
    return (
      <Box as="main" height="30vh" border="2px solid yellow">
        <Heading as="h1">
          <Center>Homepage</Center>
        </Heading>
        <Center as="p">
          Here is a paragraph.
        </Center>
        <Center as="p">
          Another paragraph.
        </Center>
      </Box>
    );
};

export default Main;