import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const TeaserSection = ({ topic, headline, children }) => {
  return (
    <Box bg="brand.main" width="full" py={{ base: 5, md: 10 }} px={4} align="center" color="white" mb={8}>
    </Box>
  );
};

export default TeaserSection;