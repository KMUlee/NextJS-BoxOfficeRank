import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://movie-server-vpdvl.run.goorm.io/",
  cache: new InMemoryCache(),
});

export default client;
