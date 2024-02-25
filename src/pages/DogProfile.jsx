import React from "react";
import { Box, Image, Flex, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const buddyImageUrl = "https://images.unsplash.com/photo-1612774412771-005ed8e861d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXJ8ZW58MHx8fHwxNzA4ODg0NTE3fDA&ixlib=rb-4.0.3&q=80&w=1080";

const DogProfile = () => {
  const { id } = useParams();
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
        <Image src={buddyImageUrl} alt={`Picture of Buddy`} />
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
