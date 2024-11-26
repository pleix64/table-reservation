import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import ImageSlide from "./ImageSlide";
import { useMemo } from "react";

const About = () => {
    const images = useMemo(() => [
        'img/mario-and-adrian.jpg',
        'img/Mario-and-Adrian-b.jpg',
        'img/head-chef.jpg',
        'img/restaurant-chef-c.jpg',
        'img/restaurant-inside.jpg',
        'img/restaurant-inside-alternative.jpg',
      ], []);

      const captions = useMemo(() => [
        'Mario and Adrian',
        'Mario and Adrian',
        'Head chef',
        'Head chef',
        'Inside Little Lemon',
        'Inside Little Lemon',
      ], []);

    return (
    <Flex id="about-section" justify="center" mt="3rem" mb="3rem">
        <Flex maxWidth="960px" gap={10}>
            <Stack width="50%" justify="flex-start">
                <HStack justify="flex-start">
                    <Heading as="h1">About Us</Heading>
                </HStack>
                <Text as="p">
                    In the heart of Chicago, Little Lemon stood as a tribute to brothers Mario and Adrian’s passion for Mediterranean cuisine. Inspired by their Greek and Italian grandparents, the brothers infused their dishes with the flavors of their heritage. Mario managed the business with charm, while Adrian crafted vibrant recipes like silky hummus and flaky spanakopita.
                </Text>
                <Text as="p">
                    Despite challenges in Chicago’s competitive food scene, their authenticity and heart set them apart. Customers loved the warmth of the restaurant, and soon Little Lemon gained critical acclaim. For the brothers, every dish was a celebration of culture, family, and a shared dream.
                </Text>
            </Stack>
            <Box width="50%" mt="3rem">
                <ImageSlide images={images} captions={captions} minH="300px"/>
            </Box>
        </Flex>
    </Flex>
    );
};

export default About;