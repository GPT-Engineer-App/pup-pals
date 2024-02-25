import React from "react";
import { Box, Link, Flex, Heading, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { Input, Icon } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
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

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Log In</Button>
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

      <Box display={{ sm: "block", md: "block" }} mt={{ base: 4, md: 0 }}>
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" px={2}>
          About
        </Link>
        <Link as={RouterLink} to="/dogology" px={2} mr={4}>
          Dogology
        </Link>
        <Link as={RouterLink} onClick={onOpen} px={2}>
          Log In
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
