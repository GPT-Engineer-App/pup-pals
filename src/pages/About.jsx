import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW={"7xl"} p={12} pt={28}>
      <Heading as="h1" mb={6}>
        About Us
      </Heading>
      <Box>
        <Text fontSize="lg" mb={4}>
          Welcome to the Dog Borrowing Website where you can find a furry friend to spend your time with!
        </Text>
        <Text fontSize="lg">We are dedicated to helping dogs find temporary homes with loving families. Our mission is to provide a service that benefits both dogs in need of attention and people who love spending time with them.</Text>
      </Box>
    </Container>
  );
};

export default About;
