import "../styles/globals.css";
import Layout from "../components/Layout";
import { Web3ConnectorConfig } from "../utils/web3/ConnectorConfig";

function MyApp({ Component, pageProps }) {
  return (
    <Web3ConnectorConfig>
      <Layout>
      {" "}
      <Component {...pageProps} />
    </Layout>
    </Web3ConnectorConfig>
    
  );
}

export default MyApp;
