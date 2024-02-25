import React from "react";
import { Box, Image, SimpleGrid, Text, VStack, Heading, Input, Icon } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";

const buddyImageUrl = "https://images.unsplash.com/photo-1612774412771-005ed8e861d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MHx8fHwxNzA4ODg0NTE3fDA&ixlib=rb-4.0.3&q=80&w=1080";

import { useState } from "react";

const DogProfile = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dogDetails = {
    name: "Buddy",
    age: "2 years",
    needs: "Special diet",
    likes: ["Playing fetch", "Cuddles"],
    availability: "Weekends and evenings",
    images: ["https://images.unsplash.com/photo-1", "https://images.unsplash.com/photo-2", "https://images.unsplash.com/photo-3", "https://images.unsplash.com/photo-4", "https://images.unsplash.com/photo-1612774412771-005ed8e861d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MHx8fHwxNzA4ODg0NTE3fDA&ixlib=rb-4.0.3&q=80&w=1080"],
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < dogDetails.images.length - 1 ? prevIndex + 1 : prevIndex));
  };

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pt="6rem" m={4}>
      <Box>
        <SimpleGrid columns={2} spacing={5} mb={5}>
          <Box textAlign="center">
            <Image src="https://via.placeholder.com/100" alt="Placeholder image" height="100px" width="100px" />
          </Box>
          <Box textAlign="center">
            <Image src="https://via.placeholder.com/100" alt="Placeholder image" height="100px" width="100px" />
          </Box>
        </SimpleGrid>
      </Box>
      <VStack spacing={6} align="stretch">
        <Heading as="h2" size="xl">
          About Pup
        </Heading>
        <Text fontSize="2xl" fontWeight="extrabold">
          {dogDetails.name}
        </Text>
        <Text fontSize="lg">Age: {dogDetails.age}</Text>
        <Text fontSize="lg">Special Needs: {dogDetails.needs}</Text>
        <Text fontSize="lg">Likes: {dogDetails.likes.join(", ")}</Text>
        <Text fontSize="lg">Dislikes: Good with children but nervous around cats</Text>
        <Text fontSize="lg">Personality: Outgoing and playful, but can be stubborn at times</Text>
        <Text fontSize="lg">Availability: {dogDetails.availability}</Text>
      </VStack>
    </SimpleGrid>
  );
};

export default DogProfile;
