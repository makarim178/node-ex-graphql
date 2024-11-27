const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString
} = require('graphql');

const LocationType = new GraphQLObjectType({
    name: 'location',
    fields: () => ({
        id: { type: GraphQLID },
        city: { type: GraphQLString },
        provinceAbbr: { type: GraphQLString },
        countryAbbr: { type: GraphQLString }
    })
});

module.exports = {
    LocationType
};