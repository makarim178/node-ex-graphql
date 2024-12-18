const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLID },
    category: { type: GraphQLString },
  }),
});

module.exports = { CategoryType };
