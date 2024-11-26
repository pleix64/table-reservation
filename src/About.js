import { Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";

const About = () => {
    return (
    <Flex id="about-section" justify="center">
        <Stack width="960px">
            <HStack justify="flex-start">
                <Heading as="h1">About Us</Heading>
            </HStack>
            <Text as="p">Story about Adrian and Mario...</Text>
        </Stack>
    </Flex>
    );
};

export default About;