const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const { LocationType } = require('./locationType');
const Location = require('../../models/location');

const InstitutionType = new GraphQLObjectType({
  name: 'Institution',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    location: {
      type: LocationType,
      resolve({ locationId }, args) {
        return Location.findById(locationId);
      },
    },
    url: { type: GraphQLString },
  }),
});

module.exports = { InstitutionType };
