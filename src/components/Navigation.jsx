import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Link, Flex, Heading, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, Icon } from "@chakra-ui/react";
import { FaApple } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

import { Input } from "@chakra-ui/react";
import { FaPaw, FaInstagram, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white" position="fixed" w="100%" top={0} zIndex={1000}>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log In</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Input placeholder="Email" mb={3} />
                <Input placeholder="Password" type="password" />
              </FormControl>
            </ModalBody>

            <ModalFooter flexDirection="column" alignItems="center">
              <Button colorScheme="blue" w="full" mb={3} onClick={onClose}>
                Close
              </Button>
              <Button
                variant="ghost"
                w="full"
                mb={3}
                onClick={() => {
                  navigate("/account");
                  onClose();
                }}
              >
                Log In
              </Button>

              <Flex align="center" my={3}>
                <Box flex="1" borderTop="1px solid" borderColor="gray.500" />
                <Box px={2} bg="white">
                  OR
                </Box>
                <Box flex="1" borderTop="1px solid" borderColor="gray.500" />
              </Flex>
              <Button w="full" colorScheme="blackAlpha" leftIcon={<Icon as={FaApple} />}>
                Sign in with Apple
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <Flex align="center" mr={5}>
        <Flex align="center" mr={5}>
          <Icon as={FaPaw} w={8} h={8} mr={2} />
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Pup Pals
          </Heading>
        </Flex>
      </Flex>

      <Box display={{ sm: "block", md: "block" }} mt={{ base: 4, md: 0 }} ml="auto">
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" px={2} mr={4}>
          About
        </Link>
        <Link as={RouterLink} to="/membership" px={2} mr={4}>
          Membership
        </Link>

        <Link as={RouterLink} to="/pupology" px={2} mr={4}>
          Pupology
        </Link>
        <Link as={RouterLink} to="/faq" px={2} mr={4}>
          FAQ
        </Link>
        <Link as={RouterLink} onClick={onOpen} px={2}>
          Log In
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
