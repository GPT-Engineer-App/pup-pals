import React from "react";
import { Box, Heading, Text, Button, FormControl, FormLabel, Input, Image } from "@chakra-ui/react";

function PalSignUp() {
  return (
    <Box padding="4" pt="6rem" maxW="3xl" mx="auto">
      <Box display="flex" justifyContent="center" mb={6}>
        <Image borderRadius="lg" src="https://via.placeholder.com/150?text=Person+Sketch" alt="Sketch of a person" />
      </Box>
      <Heading as="h1" size="xl" textAlign="center" mb="6">
        Pal Sign Up
      </Heading>
      <Text fontSize="lg" textAlign="center">
        Sign up form for Pals will go here.
      </Text>
      <form>
        <FormControl id="pal-first-name" isRequired>
          <FormLabel>First Name</FormLabel>
          <Input placeholder="First Name" />
        </FormControl>
        <FormControl id="pal-last-name" mt={4} isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Last Name" />
        </FormControl>
        <FormControl id="pal-email" mt={4} isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="email@example.com" />
        </FormControl>
        <FormControl id="pal-phone-number" mt={4} isRequired>
          <FormLabel>Phone Number</FormLabel>
          <Input type="tel" placeholder="+1234567890" />
        </FormControl>
        <Button width="full" mt={4} colorScheme="blue" type="submit">
          Sign Up
        </Button>
      </form>
    </Box>
  );
}

export default PalSignUp;
