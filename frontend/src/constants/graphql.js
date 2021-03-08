// https://github.com/howtographql/vue-apollo/blob/master/src/constants/graphql.js
// https://www.howtographql.com/vue-apollo/5-authentication/

import gql from "graphql-tag";

export const REGISTER_MUTATION = gql`
  mutation RegisterMutation(
    $name: String!
    $username: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    register(
      input: {
        name: $name
        email: $username
        password: $password
        password_confirmation: $passwordConfirmation
      }
    ) {
      tokens {
        access_token
        refresh_token
        expires_in
        token_type
      }
      status
    }

    login(input: { username: $username, password: $password }) {
      access_token
      user {
        id
        name
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      access_token
      user {
        id
      }
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation LogoutMutation {
    logout {
      status
      message
    }
  }
`;
