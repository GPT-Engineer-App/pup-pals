import React from "react";
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

function Account() {
  return (
    <Flex>
      <Box width="250px" borderRight="1px" borderColor="gray.200">
        <Tabs orientation="vertical" align="start">
          <TabList align="start">
            <Tab>Details</Tab>
            <Tab>Security</Tab>
            <Tab>Notification Settings</Tab>
            <Tab>My Membership</Tab>
            <Tab>Payment Details</Tab>
          </TabList>
        </Tabs>
      </Box>
      <Box flex="1" p="5">
        <Tabs orientation="vertical" isFitted>
          <TabPanels>
            <TabPanel>
              <form>
                <FormControl id="details-first-name" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input placeholder="First Name" />
                </FormControl>
                <FormControl id="details-last-name" mt={4} isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input placeholder="Last Name" />
                </FormControl>
                <FormControl id="details-email" mt={4} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="email@example.com" />
                </FormControl>
                <FormControl id="details-phone-number" mt={4} isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="tel" placeholder="+1234567890" />
                </FormControl>
                <Button width="full" mt={4} colorScheme="blue" type="submit">
                  Save Changes
                </Button>
              </form>
            </TabPanel>
            <TabPanel>
              <Text fontSize="2xl">Security Content</Text>
            </TabPanel>
            <TabPanel>
              <Text fontSize="2xl">Notification Settings Content</Text>
            </TabPanel>
            <TabPanel>
              <Text fontSize="2xl">My Membership Content</Text>
            </TabPanel>
            <TabPanel>
              <Text fontSize="2xl">Payment Details Content</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}

export default Account;
