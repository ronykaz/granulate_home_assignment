import { gql } from "@apollo/client";

export const INITIAL_STATE = {
  query: gql`
    query InitialState {
      isLoggedIn
    }
  `,
  data: {
    isLoggedIn: false,
  },
};

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const UPDATE_LOGGED_IN = {
  query: gql`
    query LoginUser {
      isLoggedIn
    }
  `,
  data: {
    isLoggedIn: true,
  },
};

export const UPDATE_LOGGED_OUT = {
  query: gql`
    query LogoutUser {
      isLoggedIn
    }
  `,
  data: {
    isLoggedIn: false,
  },
};
