import {gql} from '@apollo/client';

const FETCH_USER_REPOS = gql`
  query FetchRepos($userQuery: String!, $cursor: String) {
      user(login: $userQuery) {
        id
        repositories(first: 10, after: $cursor, orderBy: {field: CREATED_AT, direction: DESC}) {
          edges {
            node {
              id
              name
              stargazerCount
              primaryLanguage {
                name
                id
                color
              }
            }
          }
          totalCount
          pageInfo {
              endCursor
              hasNextPage
          }
        }
        avatarUrl
        name
        login
      }
  }
`;

export {FETCH_USER_REPOS};