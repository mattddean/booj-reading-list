// https://github.com/howtographql/vue-apollo/blob/master/src/constants/graphql.js
// https://www.howtographql.com/vue-apollo/5-authentication/

import gql from "graphql-tag";

export const REGISTER_MUTATION = gql`
  mutation RegisterMutation(
    $name: String!
    $username: String!
    $password: String!
  ) {
    register(
      name: $name
      authProvider: { username: { username: $username, password: $password } }
    ) {
      id
    }

    login(input: { username: $username, password: $password }) {
      access_token
      user {
        id
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
