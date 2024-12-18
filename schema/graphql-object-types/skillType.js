const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const { CategoryType } = require('./categoryType');

const SkillType = new GraphQLObjectType({
  name: 'skill',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: { type: CategoryType },
    url: { type: GraphQLString },
  }),
});

module.exports = { SkillType };
