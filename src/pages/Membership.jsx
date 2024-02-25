import React from "react";
import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";

const Membership = () => {
  return (
    <Box pt={36} p={4}>
      <SimpleGrid columns={2} spacing={10}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
          <Heading as="h3" size="lg" mb={4}>
            Basic
          </Heading>
          <Text>Details of basic membership...</Text>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
          <Heading as="h3" size="lg" mb={4}>
            Premium
          </Heading>
          <Text>Details of premium membership...</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Membership;
