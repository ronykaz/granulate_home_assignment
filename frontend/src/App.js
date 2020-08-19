import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { resolvers, typeDefs } from "./apolo/resolvers";
import { INITIAL_STATE } from "./apolo/queries";

import { Header } from "./components/layout/Header";
import { MainView } from "./components/layout/MainView";

const link = createHttpLink({
  uri: "http://localhost:8000/graphql/",
  credentials: "include",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  typeDefs,
  resolvers,
});

client.writeQuery(INITIAL_STATE);

const App = () => (
  <ApolloProvider client={client}>
    <Header />
    <MainView />
  </ApolloProvider>
);

export default App;
