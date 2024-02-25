import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Pupology = () => {
  return (
    <Box p={5}>
      <Heading as="h2" size="xl" mb={4}>
        Dog Breeds Information
      </Heading>
      <Text>Here you'll find a variety of information on different dog breeds!</Text>
      {/* Content about dog breeds will be added here */}
    </Box>
  );
};

export default Pupology;
