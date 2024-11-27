import { Flex, Stack, Grid, Image, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Nav from "./Nav";

const socials = [
  {
    name: "X (Twitter)",
    icon: faSquareXTwitter,
    url: "https://x.com",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    url: "https://instagram.com/",
  },
  {
    name: "Facebook",
    icon: faFacebook,
    url: "https://facebook.com/",
  },
];

const Footer = (props) => {
    return (
      <Grid
        as="footer"
        className="footer"
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        templateRows={{ base: "repeat(2, 1fr)", md: "1fr"}}
        gap="5"
        width="100vw"
        bg="secondary.500"
        pt="1rem"
        pb="1rem"
      >
        <Flex align="top" justify="flex-end" mr="2rem" mt="0.6rem">
          <Image
            src="logo/vertical_lemon_green.png"
            alt="Little Lemon Footer Logo"
            height="180px"
            fit="contain"
          />
        </Flex>
        <Stack align="center">
          <Nav />
        </Stack>
        <Stack>
          <Text as="h3">Contact</Text>
          <Text as="p">Email: <Link to="mailto: info@littlelemon.com">info@littlelemon.com</Link></Text>
          <Text as="p">Phone: (312) 555-6789</Text>
          <Text as="p">Address: 555 Xyz St., Chicago, IL</Text>
        </Stack>
        <Stack>
          <Text as="h3">Follow Us</Text>
          {socials.map((item) => {
            return (
              <a href={item.url} key={item.name} target="_blank" rel="noreferrer">
                <HStack>
                  <FontAwesomeIcon icon={item.icon} size="2x" />
                  <Text>{item.name}</Text>
                </HStack>
              </a>
            )
          })}
        </Stack>
      </Grid>
    );
};

export default Footer;