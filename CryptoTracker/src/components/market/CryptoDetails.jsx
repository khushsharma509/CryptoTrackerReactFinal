import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const CryptoDetails = ({ assets }) => {
  const { id } = useParams();
  const crypto = assets.find((asset) => asset.id === id);

  if (!crypto) {
    return <Text>Loading...</Text>;
  }

  return (
    <Box p={4}>
      
    </Box>
  );
};

export default CryptoDetails;
