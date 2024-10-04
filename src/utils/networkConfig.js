import { getFullnodeUrl } from "@mysten/sui/client";
import {
  DEVNET_MINT_NFT_PACKAGE_ID,
  TESTNET_MINT_NFT_PACKAGE_ID,
  MAINNET_MINT_NFT_PACKAGE_ID,
} from "./constants.js";
import { createNetworkConfig } from "@mysten/dapp-kit";

const { networkConfig, useNetworkVariable, useNetworkVariables } =
  createNetworkConfig({
    devnet: {
      url: getFullnodeUrl("devnet"),
      variables: {
        realEstateICOPackageId: DEVNET_MINT_NFT_PACKAGE_ID,
      },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        realEstateICOPackageId: TESTNET_MINT_NFT_PACKAGE_ID,
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: {
        realEstateICOPackageId: MAINNET_MINT_NFT_PACKAGE_ID,
      },
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
