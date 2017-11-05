import { GraphQLClient } from 'graphql-request';

const token = process.env.NJ_CODES_GH_TOKEN;
const endpoint = 'https://api.github.com/graphql';
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `bearer ${token}`
  }
});

export default client;
