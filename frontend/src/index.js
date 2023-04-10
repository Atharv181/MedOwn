import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { polygonMumbai, mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const { chains, provider } = configureChains(
  [polygonMumbai, mainnet, polygon, optimism, arbitrum],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <App></App>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);


