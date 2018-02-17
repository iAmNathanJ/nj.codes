import { GraphQLClient } from 'graphql-request';

const { GH_TOKEN } = process.env;
const endpoint = 'https://api.github.com/graphql';
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `bearer ${GH_TOKEN}`
  }
});

export default client;
