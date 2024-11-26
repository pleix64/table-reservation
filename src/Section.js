import { Flex, Stack } from "@chakra-ui/react";

const Section = ({children}) => {
    return (
      <Flex justify="center" mt="2rem" mb="2rem">
        <Stack width="960px">
            {children}
        </Stack>
    </Flex>);
};

export default Section;