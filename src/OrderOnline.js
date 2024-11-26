import { Heading, Text } from "@chakra-ui/react";
import Section from "./Section";

const OrderOnline = () => {
    return (
        <Section>
            <Heading as="h1">Order Online</Heading>
            <Text as="p">Use this page to display and manage Cart, and check out the order.</Text>
        </Section>
    )
};

export default OrderOnline;