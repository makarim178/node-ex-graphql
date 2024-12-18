const {
	GraphQLObjectType,
	GraphQLList,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
} = require('graphql');

const Location = require('../../models/location');
const Skill = require('../../models/skill');

const { LocationType } = require('./locationType');
const { SkillType } = require('./skillType');

const { MONTH_NAME } = require('../../shared/constants');

const ExperienceType = new GraphQLObjectType({
    name: 'experience',
    fields: () => ({
        id: { type: GraphQLID },
        orgName: { type: GraphQLString },
        orgLocation: {
            type: LocationType,
            resolve({ orgLocationId }, args){
                return Location.findById(orgLocationId);
            }
        },
        jobTitle: { type: GraphQLString },
        jobDescription: { type: GraphQLString },
        jobAchievements: { type: new GraphQLList(GraphQLString)},
        skillIds: { type: new GraphQLList(GraphQLString)},
        skills: { 
            type: new GraphQLList(SkillType),
            resolve({ skillIds }, args ) {
                return Skill.find({ _id: { $in: skillIds }})
            }
        },
        yearStart: { type: GraphQLInt },
        yearEnd: { type: GraphQLInt },
        monthStart: { type: GraphQLInt },
        monthStartName: {
            type: GraphQLString,
            resolve({ monthStart }, args) {
                return MONTH_NAME[monthStart];
            }
        },
        monthEnd: { type: GraphQLInt },
        monthEndName: {
            type: GraphQLString,
            resolve({ monthEnd }, args) {
                return MONTH_NAME[monthEnd];
            }
        },
    })
});

module.exports = {
    ExperienceType
};
