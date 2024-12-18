const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString
} = require('graphql');

const ProfileType = new GraphQLObjectType({
    name: 'profile',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        url: { type: GraphQLString }
    })
});

module.exports = { ProfileType };