import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { Roboto } from "@next/font/google";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThirdwebProvider>
  );
}

export default MyApp;
