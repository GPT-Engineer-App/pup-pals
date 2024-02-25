import React from "react";
import { Box, Image, SimpleGrid, Text, VStack, Heading, Link, Flex, Button } from "@chakra-ui/react";
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
    <SimpleGrid columns={1} spacing={10} pt="6rem" m={4}>
      <Flex justifyContent="center" alignItems="center" direction="column">
        <Image src={buddyImageUrl} alt={`Picture of ${dogDetails.name}`} boxSize="200px" objectFit="cover" borderRadius="full" mb={4} />
        <Flex justifyContent="space-between" width="100%">
          <Button onClick={prevImage} disabled={currentImageIndex === 0}>
            {"<"}
          </Button>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={dogDetails.images[currentImageIndex]} alt={`Picture of ${dogDetails.name}`} />
          </Box>
          <Button onClick={nextImage} disabled={currentImageIndex === dogDetails.images.length - 1}>
            {">"}
          </Button>
        </Flex>
      </Flex>
      <VStack spacing={6} align="left">
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
      <Box textAlign="center">
        <Link href="https://maps.google.com/?q=86+Blackheath+Road,+Greenwich+SE10+8DA,+United+Kingdom" isExternal fontSize="sm">
          86 Blackheath Road, Greenwich SE10 8DA, United Kingdom
        </Link>
        <iframe width="100%" height="250" frameBorder="0" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=86+Blackheath+Road,+Greenwich+SE10+8DA,+United+Kingdom&t=&z=13&ie=UTF8&iwloc=&output=embed" title="Google Maps" aria-label="Google Maps"></iframe>
      </Box>
    </SimpleGrid>
  );
};

export default DogProfile;
