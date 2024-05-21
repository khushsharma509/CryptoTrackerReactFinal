import React, { useEffect } from "react";
import { Flex, Text, Skeleton } from "@chakra-ui/react";
import Card from "../../layout/Card";
import useWhaleWatchStore from "../../../stores/useWhaleWatchStore";

const WhaleWatchCard = () => {
  const { highestTransaction, error, isLoading, message, fetchWhaleActivity } = useWhaleWatchStore(state => ({
    highestTransaction: state.highestTransaction,
    error: state.error,
    isLoading: state.isLoading,
    message: state.message, // Add message to state properties
    fetchWhaleActivity: state.fetchWhaleActivity,
  }));

  useEffect(() => {
    fetchWhaleActivity();
    const interval = setInterval(fetchWhaleActivity, 10000);
    return () => clearInterval(interval);
  }, [fetchWhaleActivity]);

  return (<></>
    
  );
};

export default WhaleWatchCard;
