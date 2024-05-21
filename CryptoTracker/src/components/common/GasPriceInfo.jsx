import React, { useEffect, useRef } from "react";
import { Flex, Text, Icon, Tooltip } from "@chakra-ui/react";
import { MdLocalGasStation } from "react-icons/md";
import useGasPriceStore from "../../stores/useGasPriceStore"; 

const GasPriceInfo = ({ showTooltip = false, refreshInterval = 60000 }) => {
  const { standardGasPrice, fastGasPrice, fetchGasPrices, lastFetched } = useGasPriceStore();
  const fetchRef = useRef(fetchGasPrices); 

 
  useEffect(() => {
    fetchRef.current = fetchGasPrices;
  }, [fetchGasPrices]);

  
  useEffect(() => {
    const handleFetch = () => {
      
      if (!standardGasPrice || !fastGasPrice || Date.now() - lastFetched > refreshInterval) {
        fetchRef.current(); 
      }
    };

    handleFetch(); 
    const intervalId = setInterval(handleFetch, refreshInterval); 
    return () => clearInterval(intervalId); 
  }, [standardGasPrice, fastGasPrice, lastFetched, refreshInterval]);

  
  const gasInfo = (
    <Flex alignItems="center" cursor="pointer" mr={4}>
      <Icon as={MdLocalGasStation} color="gray.600" mr={2} />
      <Text mr={2}>ETH Gas:</Text>
      <Text fontWeight="bold" as="span">
        {standardGasPrice ? `${standardGasPrice} Gwei` : "Loading..."}
      </Text>
    </Flex>
  );

 
  const shouldShowTooltip = showTooltip && standardGasPrice && fastGasPrice;

  return (
    <>
      {shouldShowTooltip ? (
        <Tooltip label={`Standard: ${standardGasPrice} Gwei | Fast: ${fastGasPrice} Gwei`} aria-label="Gas Price Tooltip">
          {gasInfo}
        </Tooltip>
      ) : (
        gasInfo
      )}
    </>
  );
};

export default GasPriceInfo; 
