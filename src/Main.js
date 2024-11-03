import React from "react";
import { Center } from "@chakra-ui/react";

const Main = (props) => {
    return (
      <main >
        <Center as="p" height="30vh" border="2px solid yellow" textStyle="body">
          Homepage
        </Center>
        <p>
          Here is a paragraph.
        </p>
        <p>
          Another paragraph.
        </p>
      </main>
    );
};

export default Main;