import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider, createHttpLink } from "@apollo/client";

import { Header } from "./components/layout/Header";
import { MainView } from "./components/layout/MainView";

const link = createHttpLink({
  uri: "http://localhost:8000/graphql/",
  credentials: "include",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const App = () => (
  <ApolloProvider client={client}>
    <Header />
    <MainView />
  </ApolloProvider>
);

export default App;
