import React from "react";
import { Card, CardHeader, CardBody, Image, Text, Stack, HStack, Heading, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import Section from "./Section";

const cardData = [
    {
        id: "01",
        name: "Greek salad",
        price: "12.99",
        url: "img/menu_items/Greek salad.jpg",
        description: "The famous greek salad of crisp lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        id: "02",
        name: "Bruschetta",
        price: "5.99",
        url: "img/menu_items/Bruschetta.jpg",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
        id: "03",
        name: "Lemon Dessert",
        price: "5.00",
        url: "img/menu_items/Lemon dessert.jpg",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
];

const HighlightSection = () => {
    return (
    <Section>
        <HStack justify="space-between" padding={2}>
            <h1>This week's specials!</h1>
            <Button asChild variant="brandPrimary" borderRadius="xl">
                <Link to="/menu">Online Menu</Link>
            </Button>
        </HStack>
        <Stack direction={{ base: 'column', md: 'row' }}>
            {cardData.map( item => {
                return (
                <Card
                    key={item.id}
                    className="card"
                    direction={{ base: 'row', md: 'column' }}
                    size={{ base: "sm" }}
                >
                    <CardHeader padding={0} borderTopRadius="xl">
                        <Image src={item.url} boxSize={{ base: "240px", md: "320px" }} objectFit="cover" borderRadius="xl"/>
                    </CardHeader>
                    <CardBody bg="secondary.500" padding={0}>
                        <Stack padding={3} justify="space-between" gap={5}>
                            <HStack justify="space-between" marginTop={4}>
                                <Heading as="h3">{item.name}</Heading>
                                <Heading as="h3" color="secondary.100">${item.price}</Heading>
                            </HStack>
                            <Text as="p" height={{ base: "6rem", md: "13rem" }}>{item.description}</Text>
                            <a href="/#" role="button" className="button">
                              <Text fontWeight="bold !important">
                                Order a delivery <FontAwesomeIcon icon={faTruckFast}/>
                              </Text>
                            </a>
                        </Stack>
                    </CardBody>
                </Card>)
            })}
        </Stack>
    </Section>
    )
};

export default HighlightSection;