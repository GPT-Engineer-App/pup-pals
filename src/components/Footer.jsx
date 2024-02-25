import React from "react";
import { Box, Link, Flex, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Flex as="footer" align="center" justify="center" wrap="wrap" padding="1rem" bg="gray.200">
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
