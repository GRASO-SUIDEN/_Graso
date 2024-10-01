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
        mintNftPackageId: DEVNET_MINT_NFT_PACKAGE_ID,
      },
    },
    testnet: {
      url: getFullnodeUrl("testnet"),
      variables: {
        mintNftPackageId: TESTNET_MINT_NFT_PACKAGE_ID,
      },
    },
    mainnet: {
      url: getFullnodeUrl("mainnet"),
      variables: {
        mintNftPackageId: MAINNET_MINT_NFT_PACKAGE_ID,
      },
    },
  });

export { useNetworkVariable, useNetworkVariables, networkConfig };
