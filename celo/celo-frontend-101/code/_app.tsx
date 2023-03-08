// This file is the entry point for the app. It is used to wrap the app with the RainbowKitProvider and WagmiConfig components. 

// Import the global style sheet as well as the RainbowKit and react-toastify stylesheets.
import 'react-toastify/dist/ReactToastify.css';
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { AppProps } from "next/app";

// Import the connectorsForWallets function to create a list of wallets to connect to. 
// Import the RainbowKitProvider component to wrap the app with.
import {
  connectorsForWallets,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";

// Import three different wallets connectors from the RainbowKit package.
import {
  metaMaskWallet,
  omniWallet,
  walletConnectWallet
} from "@rainbow-me/rainbowkit/wallets";

// Import configureChains, createClient, and WagmiConfig from the Wagmi package to configure the Wagmi client.
import { configureChains, createClient, WagmiConfig } from "wagmi";

// Import the jsonRpcProvider from the Wagmi package to specify the RPC URLs of the chains we want to connect to.
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

// Import known recommended CELO wallets
import { Valora, CeloWallet, CeloDance } from "@celo/rainbowkit-celo/wallets";

// Import CELO chain information
import { Alfajores, Celo } from "@celo/rainbowkit-celo/chains";

import Layout from "../components/Layout";

// Import the ToastContainer component from react-toastify to display notifications.
import {ToastContainer} from "react-toastify";

// Configure the information for the chains we want to connect to through RainbowKit.
const { chains, provider } = configureChains(
  [Alfajores, Celo],
  [jsonRpcProvider({ rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }) })]
);

// Create the list of wallets to connect to.
const connectors = connectorsForWallets([
  {
    groupName: "Recommended with CELO",
    wallets: [
      Valora({ chains }),
      CeloWallet({ chains }),
      CeloDance({ chains }),
      metaMaskWallet({ chains }),
      omniWallet({ chains }),
      walletConnectWallet({ chains }),
    ],
  },
]);

// Create the Wagmi client.
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// Create and export the App component wrapped with the RainbowKitProvider and WagmiConfig.
function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} coolMode={true}>
        <ToastContainer position={'bottom-center'} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App;