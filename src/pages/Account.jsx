import React from "react";
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

function Account() {
  return (
    <Flex>
      <Box width="250px" borderRight="1px" borderColor="gray.200">
        <Tabs orientation="vertical">
          <TabList>
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
              <Text fontSize="2xl">Details Content</Text>
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
