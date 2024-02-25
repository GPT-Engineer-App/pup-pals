import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

function PalSignUp() {
  return (
    <Box padding="4" maxW="3xl" mx="auto">
      <Heading as="h1" size="xl" textAlign="center" mb="8">
        Pal Sign Up
      </Heading>
      <Text fontSize="lg" textAlign="center">
        Sign up form for Pals will go here.
      </Text>
      {/* Form fields and submit button will be added here later */}
      <Button colorScheme="blue" mt="4">
        Sign Up
      </Button>
    </Box>
  );
}

export default PalSignUp;
