import React from "react";
import { gql, useMutation } from "@apollo/client";
import LoginForm from "./LoginForm";

const SIGN_IN = gql`
  mutation Login($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      payload
    }
  }
`;

export function Login() {
  const [signIn, { data, loading, error }] = useMutation(SIGN_IN, {
    errorPolicy: "all",
  });
  if (data) console.log(data);

  function handleSignIn(username, password) {
    signIn({ variables: { username: username, password: password } });
  }

  return (
    <LoginForm handleSignIn={handleSignIn} loading={loading} error={error} />
  );
}
