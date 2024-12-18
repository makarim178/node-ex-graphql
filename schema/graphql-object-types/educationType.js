const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const Institute = require('../../models/institute');
const { InstitutionType } = require('./institutionType');

const { MONTH_NAME } = require('../../shared/constants');

const EducationType = new GraphQLObjectType({
  name: 'Education',
  fields: () => ({
    id: { type: GraphQLID },
    gradType: { type: GraphQLString },
    gradName: { type: GraphQLString },
    yearStart: { type: GraphQLInt },
    yearEnd: { type: GraphQLInt },
    monthStart: { type: GraphQLInt },
    monthStartName: {
      type: GraphQLString,
      resolve({ monthStart }, args) {
        return MONTH_NAME[monthStart];
      },
    },
    monthEnd: { type: GraphQLInt },
    monthEndName: {
      type: GraphQLString,
      resolve({ monthEnd }, args) {
        return MONTH_NAME[monthEnd];
      },
    },
    status: { type: GraphQLString },
    completionRate: { type: GraphQLInt },
    institution: {
      type: InstitutionType,
      resolve({ instituteId }, args) {
        return Institute.findById(instituteId);
      },
    },
  }),
});
module.exports = { EducationType };
