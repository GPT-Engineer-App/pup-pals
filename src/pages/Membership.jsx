import React from "react";
import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";

const Membership = () => {
  return (
    <Box pt="20rem" p={4} mb={10}>
      <Box mb={10}>
        <Heading as="h2" size="xl" mb={4}>
          Why Go Premium
        </Heading>
        <Text fontSize="lg" mb={4}>
          Unlock all the benefits of the premium membership including unlimited borrowing, access to exclusive events, and more!
        </Text>
      </Box>
      <SimpleGrid columns={2} spacing={10}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            0 AED
          </Text>
          <Heading as="h3" size="lg" mb={4}>
            Basic
          </Heading>
          <Text>Details of basic membership...</Text>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" pt={12} p={6}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            150 AED
          </Text>
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
