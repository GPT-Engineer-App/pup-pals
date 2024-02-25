import React from "react";
import { Box, Container, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

const PupDetails = () => {
  // Sample data for pup details
  const pupDetails = {
    name: "Buddy",
    age: 2,
    needs: "Daily walks and allergy medication",
    likes: "Playing fetch and belly rubs",
    availability: "Weekdays after 5pm, all day on weekends",
    images: ["https://example.com/pup-image1.jpg", "https://example.com/pup-image2.jpg", "https://example.com/pup-image3.jpg"],
  };

  return (
    <Container maxW={"7xl"} p={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          {pupDetails.images.map((image, index) => (
            <Image key={index} src={image} alt={`Pup picture ${index + 1}`} mb={2} />
          ))}
        </Box>
        <Box>
          <Heading as="h2" size="xl">
            About {pupDetails.name}
          </Heading>
          <Text fontSize="lg" mb={4}>
            Age: {pupDetails.age} years
          </Text>
          <Text fontSize="lg" mb={4}>
            Needs: {pupDetails.needs}
          </Text>
          <Text fontSize="lg" mb={4}>
            Likes: {pupDetails.likes}
          </Text>
          <Text fontSize="lg" mb={4}>
            Availability: {pupDetails.availability}
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default PupDetails;
