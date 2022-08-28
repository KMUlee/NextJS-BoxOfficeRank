import "../styles/globals.css";
import type { AppProps } from "next/app";
import client from "../apollo/client";
import { ApolloProvider } from "@apollo/client";
import { wrapper } from "../store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default wrapper.withRedux(MyApp);
