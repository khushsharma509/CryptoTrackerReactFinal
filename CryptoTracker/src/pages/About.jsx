import React from "react";
import { Box, Heading, Text, Avatar, AvatarGroup, Center } from "@chakra-ui/react";
import img1 from "../assets/geminigen.jpg";

const About = () => {
  return (
    <Box m={8} maxWidth="1200px" mx="auto">
      <Heading as="h1" size="xl" mb={4} textAlign="center">
        About Us
      </Heading>
      <Text fontSize="xl" mb={8} textAlign="center">
      Track, trade, triumph.
      </Text>
      <Center my={6}>
        <AvatarGroup size="xl" max={2}>
          <Avatar name="Katrin" src={img1} />
          
        </AvatarGroup>
      </Center>
      <Center>
        <Text fontSize="md" maxWidth="800px">
        At CryptoTracker, we believe in empowering every individual to navigate the exciting and ever-changing world of cryptocurrencies.
          <Text  fontWeight="bold">
            Trade carefully.🤗
          </Text>
        </Text>
      </Center>
    </Box>
  );
};

export default About;
