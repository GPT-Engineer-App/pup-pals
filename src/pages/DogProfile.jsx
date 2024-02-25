import React from "react";
import { Box, Image, Flex, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const DogProfile = () => {
  // Assuming we have an array of image URLs and dog details
  const { id } = useParams(); // This would be used to fetch dog details based on id
  const dogImages = ["/path/to/image1.jpg", "/path/to/image2.jpg"]; // Placeholder images array
  const dogDetails = {
    name: "Buddy",
    age: "2 years",
    needs: "Special diet",
    likes: ["Playing fetch", "Cuddles"],
    availability: "Weekends and evenings",
  };

  return (
    <Flex direction="column" align="center" m={4}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={dogImages[0]} alt={`Picture of ${dogDetails.name}`} />
      </Box>
      <VStack spacing={4} align="stretch" mt={6}>
        <Text fontSize="2xl" fontWeight="bold">
          {dogDetails.name}
        </Text>
        <Text fontSize="lg">Age: {dogDetails.age}</Text>
        <Text fontSize="lg">Special Needs: {dogDetails.needs}</Text>
        <Text fontSize="lg">Likes: {dogDetails.likes.join(", ")}</Text>
        <Text fontSize="lg">Availability: {dogDetails.availability}</Text>
      </VStack>
    </Flex>
  );
};

export default DogProfile;
