import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.28',
  },
  networks: {
    // for mainnet
    // 'base-mainnet': {
    //   url: 'https://mainnet.base.org',
    //   accounts: [process.env.WALLET_KEY as string],
    //   gasPrice: 1000000000,
    // },
    // for testnet
    'mainnet': {
      url: "https://rpc.mevblocker.io",
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 5000000000,
    },
    'sepolia': {
      url: 'https://ethereum-sepolia-rpc.publicnode.com',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    'base-sepolia': {
      url: 'https://base-sepolia-rpc.publicnode.com',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 1000000000,
    },
    'local': {
      url: 'http://127.0.0.1:8545',
      accounts: [process.env.WALLET_KEY as string],
      gasPrice: 10000000000000,
    },
    // for local dev environment
    // 'base-local': {
    //   url: 'http://localhost:8545',
    //   accounts: [process.env.WALLET_KEY as string],
    //   gasPrice: 1000000000,
    // },
    hardhat: {
      forking: {
        enabled: true,
        url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
        // blockNumber: 21686223
      }
    }
  },
  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: {
      sepolia: "8VN2TC9B27JA4YE1Z2EHEQ9XRA9WFNVBU7"
      // "base-sepolia": "NKTJTBA2R4A1PEUE8EBWSHG8G2M6IWIV6W"
    },
    customChains: [
      // {
      //   network: "mainnet",

      // }
      {
        network: "sepolia",
        chainId: 11155111,
        urls: {
          apiURL: "https://api-sepolia.etherscan.io/api",
          browserURL: "https://sepolia.etherscan.io/"
        }
      },
      {
        network: "base-sepolia",
        chainId: 84532,
        urls: {
         apiURL: "https://api-sepolia.basescan.org/api",
         browserURL: "https://sepolia.basescan.org"
        }
      }
    ]
  }
};

export default config;