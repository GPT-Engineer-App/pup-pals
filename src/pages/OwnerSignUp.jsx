import React from "react";
import { Box, Container, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

const OwnerSignUp = () => {
  return (
    <Container maxW="lg" py={12}>
      <Heading as="h2" size="xl" mb={6}>
        Owner Sign Up
      </Heading>
      <Box borderWidth="1px" rounded="lg" overflow="hidden" p={6}>
        <form>
          <FormControl id="owner-name" isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input placeholder="John Doe" />
          </FormControl>
          <FormControl id="owner-email" mt={4} isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="john@example.com" />
          </FormControl>
          {/* More form fields can be added here */}
          <Button width="full" mt={4} colorScheme="teal" type="submit">
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default OwnerSignUp;
