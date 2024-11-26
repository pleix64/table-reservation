import React from "react";
import { Grid, GridItem, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <Grid
          templateColumns={{ base: "6fr minmax(200px, 4fr)", md: "7fr minmax(300px, 3fr) 2fr"}} 
          templateRows="repeat(12, 34px)">
            <GridItem
              bg="primary.900"
              colStart={1}
              colEnd={{ base: 3, md: 4 }}
              rowStart={1}
              rowEnd={{ base: 13, md: 10 }}
            >
                <Grid
                  templateColumns="repeat(12, 1fr)"
                  templateRows="repeat(9, 25px)"
                  gap={6}
                  marginLeft={4}
                >
                    <GridItem
                      as="h1"
                      color="primary.100"
                      colStart={{ base: 1, md: 3 }}
                      colEnd={{ base: 13, md: 8 }}
                      rowStart={1}
                      rowEnd={2}
                      //border="solid 1px cyan"
                    >
                      Little Lemon
                    </GridItem>
                    <GridItem
                      as="h2"
                      color="white"
                      colStart={{ base: 1, md: 3 }}
                      colEnd={8}
                      rowStart={2}
                      rowEnd={3}
                      //border="solid 1px blue"
                    >
                      Chicago
                    </GridItem>
                    <GridItem
                      as="p"
                      color="white"
                      colStart={{ base: 1, md: 3 }}
                      colEnd={{ base: 7, md: 6 }}
                      rowStart={3}
                      rowEnd={6}
                      //border="solid 1px blue"
                    >
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern
                        twist.
                    </GridItem>
                    <GridItem
                      colStart={{ base: 1, md: 3 }}
                      colEnd={{ base: 7, md: 6 }}
                      rowStart={6}
                      rowEnd={7}
                      //border="solid 1px blue"
                    >
                      <Button asChild variant="brandPrimary" borderRadius="xl">
                        <Link to="/reservation">Reserve a Table</Link>
                      </Button>
                    </GridItem>
                </Grid>
            </GridItem>
            <GridItem
              colStart={2}
              colEnd={{ base: 4, md: 3 }}
              rowStart={{base: 4, md: 3}}
              rowEnd={12}
              //border="1px solid blue"
            >
                <Image
                  src="img/restaurant-food-b.jpg"
                  boxSize={{ base: '240px', md: '300px' }}
                  borderRadius="lg"
                  objectFit="cover"
                />
            </GridItem>
        </Grid>
    );
};

export default HeroSection;