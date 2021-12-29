import {gql} from '@apollo/client';

const SEARCH_USERS = gql`
  query SearchUsers($userQuery: String!, $cursor: String) {
    search(query: $userQuery, type: USER, first: 10, after: $cursor) {
      edges {
        node {
          ... on User {
            avatarUrl
            id
            login
            url
            createdAt
          }
        }
      }
      pageInfo {
          endCursor
          hasNextPage
      }
    }
  }
`;

export {SEARCH_USERS};