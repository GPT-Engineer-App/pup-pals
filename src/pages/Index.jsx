import React from "react";
import { Box, Container, Heading, SimpleGrid, Text, Image, Stack, Badge, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";

// Sample data for dog profiles
const dogs = [
  {
    id: 1,
    name: "Buddy",
    age: 2,
    breed: "Golden Retriever",
    description: "Friendly and energetic, loves to play fetch!",
    imageUrl: "https://images.unsplash.com/photo-1612774412771-005ed8e861d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MHx8fHwxNzA4ODg0NTE3fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Max",
    age: 4,
    breed: "German Shepherd",
    description: "Loyal and intelligent, great with kids.",
    imageUrl: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnZXJtYW4lMjBzaGVwaGVyZHxlbnwwfHx8fDE3MDg4ODQ1MTd8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Bella",
    age: 3,
    breed: "Labrador Retriever",
    description: "Sweet and gentle, loves cuddles and naps.",
    imageUrl: "https://images.unsplash.com/photo-1537204696486-967f1b7198c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYWJyYWRvciUyMHJldHJpZXZlcnxlbnwwfHx8fDE3MDg4ODQ1MTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // Add more dog profiles as needed
];

const DogCard = ({ dog }) => {
  return (
    <Box p={4} bg={useColorModeValue("white", "gray.800")} boxShadow={"lg"} rounded={"lg"} pos={"relative"} zIndex={1}>
      <Box
        rounded={"lg"}
        mt={-12}
        pos={"relative"}
        height={"230px"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 5,
          left: 0,
          backgroundImage: `url(${dog.imageUrl})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Image rounded={"lg"} height={230} width={282} objectFit={"cover"} src={dog.imageUrl} />
      </Box>
      <Stack pt={10} align={"center"}>
        <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
          {dog.breed}
        </Text>
        <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
          {dog.name}
        </Heading>
        <Stack direction={"row"} align={"center"}>
          <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
            {dog.age} years old
          </Badge>
          <FaPaw />
        </Stack>
        <Text textAlign={"center"} color={useColorModeValue("gray.700", "gray.400")} px={3}>
          {dog.description}
        </Text>
        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            as={Link}
            to={`/dog-profile/${dog.id}`}
            _focus={{
              bg: "gray.200",
            }}
          >
            Learn More
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"}
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Borrow
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

const Index = () => {
  return (
    <Container maxW={"7xl"} p={12}>
      <Box as="section" mt={12} mb={12}>
        <Heading as="h2" size="xl" mb={4}>
          How it Works
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={10}>
          <Box textAlign="center">
            <Heading as="h3" size="lg" mb={2}>
              Sign up for Free
            </Heading>
            <Text>Register and create a profile at no cost.</Text>
          </Box>
          <Box textAlign="center">
            <Heading as="h3" size="lg" mb={2}>
              Browse Profiles
            </Heading>
            <Text>Explore the various dog profiles available.</Text>
          </Box>
          <Box textAlign="center">
            <Heading as="h3" size="lg" mb={2}>
              Select Your Favorite
            </Heading>
            <Text>Choose the dog that you connect with the most.</Text>
          </Box>
          <Box textAlign="center">
            <Heading as="h3" size="lg" mb={2}>
              Message
            </Heading>
            <Text>Get in touch with the dog owner to arrange a meet-up.</Text>
          </Box>
          <Box textAlign="center">
            <Heading as="h3" size="lg" mb={2}>
              Meet Up
            </Heading>
            <Text>Meet the dog and enjoy your time together.</Text>
          </Box>
        </SimpleGrid>
      </Box>
      <SimpleGrid columns={2} spacing={10} as="section" mb={12}>
        <Box>
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Owner Sign Up
            </Heading>
            <Box flexShrink={0} mb={4}>
              <Image borderRadius="lg" width={{ md: "40" }} src={"https://via.placeholder.com/150?text=Owner+And+Dog+Cartoon"} alt={"Cartoon image of a dog with its owner"} />
            </Box>
            <Text fontSize="lg" mb={4}>
              Connect with dog lovers who can take care of your pup while you're away. Sign up and create a profile for your dog.
            </Text>
            <Button as={Link} to="/owner-signup" colorScheme="teal" size="lg">
              Sign Up as Owner
            </Button>
          </Box>
        </Box>
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Pal Sign Up
          </Heading>
          <Box flexShrink={0} mb={4}>
            <Image borderRadius="lg" width={{ md: "40" }} src={"https://via.placeholder.com/150"} alt={"People"} />
          </Box>
          <Text fontSize="lg" mb={4}>
            Looking to spend time with a pup? Sign up as a friend and start borrowing pups from our community of owners.
          </Text>
          <Button as={Link} to="/pal-signup" colorScheme="teal" size="lg">
            Sign Up as Pal
          </Button>
        </Box>
      </SimpleGrid>
      <Heading as="h1" mt={12} mb={12}>
        Pup Profiles
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {dogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
