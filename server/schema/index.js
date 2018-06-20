const { gql } = require('apollo-boost');
const { makeExecutableSchema } = require('graphql-tools');
const { reservationTypeDefs, reservationResolvers } = require('./reservations');
const merge = require('lodash/merge');

const rootSchema = gql`
  type Query {
    version: String!
  }
  type Mutation {
    version: String!
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;

const rootResolvers = {
  Query: {
    version: () => require('../../../package.json').version
  },
  Mutation: {
    version: () => require('../../../package.json').version
  }
};

const schema = makeExecutableSchema({
  typeDefs: [rootSchema, reservationTypeDefs],
  resolvers: merge({}, rootResolvers, reservationResolvers)
});

const graphqlConfig = {
  schema,
  tracing: false,
  cacheControl: {
    defaultMaxAge: 2400
  }
};

module.exports = { graphqlConfig };
