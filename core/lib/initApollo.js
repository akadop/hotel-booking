import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

import fetch from 'isomorphic-unfetch';

let apolloClient = null;

if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    cache: new InMemoryCache().restore(initialState || {}),
    link: new HttpLink({ uri: process.env.GRAPHQL_URI })
  });
}

export default function initApollo(initialState, options) {
  if (!process.browser) {
    return create(initialState, options);
  }
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }
  return apolloClient;
}
