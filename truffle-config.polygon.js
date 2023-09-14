const HDWalletProvider = require('@truffle/hdwallet-provider');
// create a file at the root of your project and name it .env -- there you can set process variables
// like the mnemomic and Infura project key below. Note: .env is ignored by git to keep your private information safe
require('dotenv').config();
const providerOrUrl = process.env["PROVIDER_OR_URL"];
const privateKey = process.env["WALLET_PRIVATE_KEY"];

module.exports = {
  solidityLog: {
    preventConsoleLogMigration: true // default is false,
  },

  /**
  * contracts_build_directory tells Truffle where to store compiled contracts
  */
  contracts_build_directory: './build/polygon-contracts',

  /**
  * contracts_directory tells Truffle where the contracts you want to compile are located
  */
  contracts_directory: './contracts/polygon',


  networks: {
    // development: {
    //   host: "127.0.0.1",     // Localhost (default: none)
    //   port: 7545,            // Standard Ethereum port (default: none)
    //   network_id: "*"       // Any network (default: none)
    // },
    pol: {
      provider: () => new HDWalletProvider({
        privateKeys: [privateKey],
        providerOrUrl: providerOrUrl
      }),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 80001
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19"
    }
  },
  db: {
    enabled: true
  }
}
