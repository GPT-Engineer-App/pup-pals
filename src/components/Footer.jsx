import React from "react";
import { Box, Link, Flex, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Flex as="footer" direction={{ base: "column", md: "row" }} align="center" justify="center" wrap="wrap" padding="1rem" bg="gray.200">
      <Box textAlign="center" mb={{ base: 4, md: 0 }} p={2}>
        <Text fontSize="sm">1234 Pup St, Dogtown, DT 01234</Text>
        <iframe width="300" height="200" frameBorder="0" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=1234%20Pup%20St,%20Dogtown,%20DT%2001234&t=&z=13&ie=UTF8&iwloc=&output=embed" title="Google Maps" aria-label="Google Maps"></iframe>
      </Box>
      <Text fontSize="sm" mr={4}>
        © 2024 Pup Pals
      </Text>
      <Link as={RouterLink} to="/about" mr={4}>
        About
      </Link>
      <Link as={RouterLink} to="/contact" mr={4}>
        Contact
      </Link>
      <Link as={RouterLink} to="/terms" mr={4}>
        Terms & Conditions
      </Link>
      <Link as={RouterLink} to="/privacy" mr={4}>
        Privacy Policy
      </Link>
      <Link as={RouterLink} to="/cookies" mr={4}>
        Cookie Policy
      </Link>
    </Flex>
  );
};

export default Footer;
