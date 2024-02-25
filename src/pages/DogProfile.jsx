import React from "react";
import { Box, Image, Flex, Text, VStack, Heading, Link } from "@chakra-ui/react";
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
    <Flex direction={{ base: "column", md: "row" }} align="center" m={4}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" w={{ md: "50%" }}>
        <Image src={buddyImageUrl} alt={`Picture of Buddy`} />
      </Box>
      <Box textAlign="center" mt={{ base: 6, md: 0 }} w="full">
        <Link href="https://maps.google.com/?q=86+Blackheath+Road,+Greenwich+SE10+8DA,+United+Kingdom" isExternal fontSize="sm">
          86 Blackheath Road, Greenwich SE10 8DA, United Kingdom
        </Link>
        <iframe width="100%" height="250" frameBorder="0" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=86+Blackheath+Road,+Greenwich+SE10+8DA,+United+Kingdom&t=&z=13&ie=UTF8&iwloc=&output=embed" title="Google Maps" aria-label="Google Maps"></iframe>
      </Box>
      <VStack spacing={6} align="left" mt={{ base: 6, md: 0 }} ml={{ md: 6 }} w="full">
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
    </Flex>
  );
};

export default DogProfile;
