import {gql} from '@apollo/client';

const CREATE_ISSUE = gql`
    mutation CreateIssue($repositoryId: String, $title: String, $body: String) {
        createIssue(input: {repositoryId: $repositoryId, title: $title, body: $body}) {
            issue {
                createdAt
                state
            }
        }
    }
`;

export {CREATE_ISSUE};