import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from "@apollo/client";
import {GITHUB_GRAPHQL_API_URL} from "./constants/apollo.constants";
import {onError} from "@apollo/client/link/error";


const httpLink = new HttpLink({
    uri: GITHUB_GRAPHQL_API_URL,
    headers: {
        authorization: `Bearer ${
            process.env.REACT_APP_GITHUB_ACCESS_TOKEN
        }`,
    },
});

const errorLink = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
        graphQLErrors.map(({message, locations, path}) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        );
    }

    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

const link = ApolloLink.from([errorLink, httpLink]);

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});