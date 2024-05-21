import React, { memo } from "react";
import { Box } from "@chakra-ui/react";
import Bar from "../layout/Bar";
import MarketArrow from "./MarketArrow";
import NextHalvingInfo from "./NextHalvingInfo";
import useAssetStore from "../../stores/useAssetStore";

const InfoBar = memo(() => {
  const {
    totalMarketCap,
    btcDominance,
    ethDominance,
    totalVolume,
    marketDirection,
  } = useAssetStore((state) => ({
    totalMarketCap: state.totalMarketCap,
    btcDominance: state.btcDominance,
    ethDominance: state.ethDominance,
    totalVolume: state.totalVolume,
    marketDirection: state.marketDirection,
  }));

  return (
    <Bar>
     
    </Bar>  );
});

export default InfoBar;
