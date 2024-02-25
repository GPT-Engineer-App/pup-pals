import React from "react";
import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

function FAQ() {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Frequently Asked Questions
      </Heading>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How does the service work?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Our service connects dog owners with dog lovers to take care of their pets when they're not available.</AccordionPanel>
        </AccordionItem>
        {/* Repeat for other 4 questions */}
      </Accordion>
    </Box>
  );
}

export default FAQ;
