const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString
} = require('graphql');

const { CategoryEnumType } = require('./categoryEnumType');

const SkillType = new GraphQLObjectType({
    name: 'skill',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        category: { type: CategoryEnumType },
        categoryValue: {
            type: GraphQLString,
            resolve({ category }, args) {
                return category;
            }
        },
        url: { type: GraphQLString }
    })
});

module.exports = { SkillType };