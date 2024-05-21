import React from "react";
import { Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import Card from "../../layout/Card";

const CryptoTrendCard = ({ title, assets, value, isColored = true }) => {

  const formatNumber = (number) => {
   
    if (value.toLowerCase().includes("usd")) {
      number = parseInt(number);
      
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0 
      }).format(number);
    } else {
      
      return parseFloat(number).toFixed(2);
    }
  };

  return (
    <Card title={title}>
      <Stack spacing={4}>
        {assets.map((asset, index) => (
          <Flex key={index} fontWeight="bold">
            <Text color="gray.500">{`${index + 1}.`}</Text>
            <Text ml={2}>{asset.name}</Text>
            <Text ml={2} color="gray.500">
              {asset.symbol}
            </Text>
            <Spacer />
            <Text ml={2} color={isColored ? (parseFloat(asset[value]) >= 0 ? "green.400" : "red.400") : "inherit"}>
              {formatNumber(asset[value])}
              {value.toLowerCase().includes("percent") && "%"}
            </Text>
          </Flex>
        ))}
      </Stack>
    </Card>
  );
};

export default CryptoTrendCard;
