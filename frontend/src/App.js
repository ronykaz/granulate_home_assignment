import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

import { Header } from "./components/layout/Header";
import { MainView } from "./components/layout/MainView";

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Header />
    <MainView />
  </ApolloProvider>
);

export default App;
