import React from "react";
import { Box, Link, Flex, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Pup Pals
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "block" }} mt={{ base: 4, md: 0 }}>
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" px={2}>
          About
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
