import React from "react";
import { useApolloClient, useMutation, gql } from "@apollo/client";

import Button from "./Button";
import ErrorMessage from "./ErrorMessage";

import { UPDATE_LOGGED_OUT } from "../../apolo/queries";

const LOG_OUT = gql`
  mutation {
    deleteTokenCookie {
      deleted
    }
  }
`;

export default function LogoutButton() {
  const [logout, { data, error }] = useMutation(LOG_OUT, {
    errorPolicy: "all",
  });
  const client = useApolloClient();

  if (data) {
    if (data.deleteTokenCookie.deleted) {
      client.writeQuery(UPDATE_LOGGED_OUT);
    }
  }

  return (
    <div className="float-right m-1">
      <Button
        bgColor="blue-500"
        hoverColor="blue-700"
        textColor="white"
        handleClick={logout}
      >
        Logout
      </Button>
      {error && <ErrorMessage message={error.message} />}
    </div>
  );
}
