const { gql } = require('apollo-boost');
const merge = require('lodash/merge');
const { makeExecutableSchema } = require('graphql-tools');

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

const mergedTypeDefs = [rootSchema];
const mergedResolvers = merge({}, rootResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers
});

module.exports = { schema };
