import React from "react";
import { Box } from "@chakra-ui/react";
import HeroSection from "./HeroSection";
import HighlightSection from "./HighlightSection";
import About from "./About";

const Main = () => {
    return (
      <Box as="main">
        <HeroSection />
        <HighlightSection />
        <About />
      </Box>
    );
};

export default Main;