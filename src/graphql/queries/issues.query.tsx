import {gql} from '@apollo/client';

const FETCH_REPO_ISSUES = gql`
    query FetchRepoIssues($userQuery: String!, $repo: String!, $cursor: String) {
        repository(name: $repo, owner: $userQuery) {
            issues(first: 10, after: $cursor, orderBy: {field: CREATED_AT, direction: DESC}) {
                edges {
                    node {
                        id
                        title
                        createdAt
                        author {
                            login
                        }
                    }
                }
                totalCount
                pageInfo {
                    endCursor
                    hasNextPage
                }
            }
            description
            primaryLanguage {
                color
                name
            }
            stargazerCount
            id
        } 
    }
`;

export {FETCH_REPO_ISSUES};