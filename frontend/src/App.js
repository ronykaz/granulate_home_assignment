import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider, createHttpLink } from "@apollo/client";

import { Header } from "./components/layout/Header";
import { MainView } from "./components/layout/MainView";

const link = createHttpLink({
  uri: "http://localhost:8000/graphql/",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  fetchOptions: {
    credentials: "include",
  },
});

const App = () => (
  <ApolloProvider client={client}>
    <Header />
    <MainView />
  </ApolloProvider>
);

export default App;
