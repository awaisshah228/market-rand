import "@rainbow-me/rainbowkit/styles.css";

import React, { createContext } from "react";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  Chain,
} from "@rainbow-me/rainbowkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { Chain, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

export const { provider, chains } = configureChains(
  [chain.ropsten],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Token Generator",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export function Web3ConnectorConfig({ children }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#FF9200",
            accentColorForeground: "white",
            borderRadius: "large",
            overlayBlur: "large",
            fontStack: "rounded",
          })}
          coolMode
          chains={chains}
        >
          {children}
          {/* </ContractContext.Provider> */}
        </RainbowKitProvider>
      </WagmiConfig>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
