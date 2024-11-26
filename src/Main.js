import React from "react";
import { Box } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import HighlightSection from "./HighlightSection";
import About from "./About";

const Main = (props) => {
    return (
      <Box
        as="main"
        //border="2px solid yellow"
      >
        <HeroSection />
        <HighlightSection />
        <About />
      </Box>
    );
};

export default Main;