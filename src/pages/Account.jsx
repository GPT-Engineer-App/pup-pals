import React from "react";
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

function Account() {
  return (
    <Flex mt="8">
      {" "}
      // Increased the margin-top to provide more space at the top of the page
      <Box width="250px" borderRight="1px" borderColor="gray.200" mb={8}>
        <Tabs orientation="vertical" align="start" mb={4}>
          <TabList align="start">
            <Tab>Details</Tab>
            <Tab>Password</Tab>
            <Tab>Notifications</Tab>
            <Tab>Membership</Tab>
            <Tab>Payment</Tab>
          </TabList>
        </Tabs>
      </Box>
      <Box flex="1" p="5">
        <Tabs orientation="vertical" isFitted>
          <TabPanels>
            <TabPanel>
              <form>
                <FormControl id="details-first-name" mt={4} isRequired>
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
              <form>
                <FormControl id="password-current" isRequired>
                  <FormLabel>Current Password</FormLabel>
                  <Input type="password" placeholder="Current Password" />
                </FormControl>
                <FormControl id="password-new" mt={4} isRequired>
                  <FormLabel>New Password</FormLabel>
                  <Input type="password" placeholder="New Password" />
                </FormControl>
                <Button width="full" mt={4} colorScheme="blue" type="submit">
                  Change Password
                </Button>
              </form>
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
