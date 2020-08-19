import React from "react";
import { gql, useMutation, useApolloClient } from "@apollo/client";
import LoginForm from "../ui/LoginForm";
import { UPDATE_LOGGED_IN } from "../../apolo/queries";

const SIGN_IN = gql`
  mutation Login($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      payload
    }
  }
`;

export function Login() {
  const client = useApolloClient();
  const [signIn, { data, loading, error }] = useMutation(SIGN_IN, {
    errorPolicy: "all",
  });
  if (data) {
    if (data.tokenAuth != null) {
      client.writeQuery(UPDATE_LOGGED_IN);
    }
  }

  function handleSignIn(username, password) {
    signIn({ variables: { username: username, password: password } });
  }

  return (
    <LoginForm handleSignIn={handleSignIn} loading={loading} error={error} />
  );
}
