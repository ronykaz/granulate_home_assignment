import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { MetricChart } from "./components/Metrics";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <MetricChart />
  </ApolloProvider>
);

export default App;
