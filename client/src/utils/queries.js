import { gql } from "@apollo/client";

export const GET_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const GET_QUERY = gql`
  query me {
    me {
      _id
      username
      savedBooks {
        bookId
        title
        authors
        description
        image
      }
    }
  }
`;
