const graphql = require('graphql');
const _ = require('lodash');

const {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLList,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
} = require('graphql');

const Education = require('../models/education.js');
const Experience = require('../models/experience.js');
const Institute = require('../models/institute.js');
const Location = require('../models/location.js');
const Skill = require('../models/skill.js');
const Profile = require('../models/profile.js');

const { MONTH_NAME } = require('../shared/constants');

const { EducationType } = require('./graphql-object-types/educationType');
const { ExperienceType } = require('./graphql-object-types/experienceType');
const { LocationType }  = require('./graphql-object-types/locationType');
const { SkillType } = require('./graphql-object-types/skillType');
const { CategoryEnumType } = require('./graphql-object-types/categoryEnumType');
const { ProfileType } = require('./graphql-object-types/profileType');
const { InstitutionType } = require('./graphql-object-types/institutionType');

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		education: {
			type: EducationType,
			args: {
				id: { type: GraphQLID }
			},
			resolve(parent, { id }) {
				// return _.find(educationList, { id: args.id });
				return Education.findById(id);
			}
		},
		institution: {
			type: InstitutionType,
			args: {
				id: { type: GraphQLID }
			},
			resolve(parent, { id }) {
				// return _.find(institutionList, { id: args.id });
				return Institute.findById(id);
			}
		},
		experience: {
			type: ExperienceType,
			args: { id: { type: GraphQLID }},
			resolve(parent, { id }) {
				return Experience.findById(id);
			}
		},
		profile: {
			type: ProfileType,
			args: { id: { type: GraphQLID }},
			resolve(parent, { id }) {
				return Profile.find(id);
			}
		},
		skill: {
			type: SkillType,
			args: { id: { type: GraphQLID }},
			resolve(parent, { id }) {
				return Skill.findById(id);
			}
		},
		educationList: {
			type: new GraphQLList(EducationType),
			resolve(parent, args) {
				return Education.find({});
			}
		},
		experienceList: {
			type: new GraphQLList(ExperienceType),
			resolve(parent, args) {
				return Experience.find({});
			}
		},
		institutionList: {
			type: new GraphQLList(InstitutionType),
			resolve(parent, args) {
				return Institute.find({});
			}
		},
		locationList: {
			type: new GraphQLList(LocationType),
			resolve(parent, args) {
				return Location.find({});
			}
		},
		skillList: {
			type: new GraphQLList(SkillType),
			resolve(parent, args) {
				return Skill.find({});
			}
		},
		profileList: {
			type: new GraphQLList(ProfileType),
			resolve() {
				return Profile.find({});
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addExperience: {
			type: ExperienceType,
			args: {
				orgName: { type: GraphQLString },
				orgLocationId: { type: GraphQLID},
				jobTitle: { type: GraphQLString },
				jobDescription: { type: GraphQLString },
				jobAchievements: { type: new GraphQLList(GraphQLString)},
				skillIds: { type: new GraphQLList(GraphQLString)},
				yearStart: { type: GraphQLInt },
				yearEnd: { type: GraphQLInt },
				monthStart: { type: GraphQLInt },
				monthEnd: { type: GraphQLInt }
			},
			resolve(parent, args) {
				let experience = new Experience({ ...args });
				return experience.save();
			}
		},
		addInstitute: {
			type: InstitutionType,
			args: {
				name: { type: GraphQLString },
				locationId: { type: GraphQLID },
				url: { type: GraphQLString }
			},
			resolve(parent, args) {
				let institute = new Institute({ ...args });
				return institute.save();
			}
		},
		addLocation: {
			type: LocationType,
			args: {
				city: { type: GraphQLString },
				provinceAbbr: { type: GraphQLString },
				countryAbbr: { type: GraphQLString }
			},
			resolve(parent, args) {
				let location = new Location({ ...args });
				return location.save();
			}
		},
		addEducation: {
			type: EducationType,
			args: {
				gradType: { type: GraphQLString },
				gradName: { type: GraphQLString },
				yearStart: { type: GraphQLInt },
				yearEnd: { type: GraphQLInt },
				monthStart: { type: GraphQLInt },
				monthEnd: { type: GraphQLInt },
				status: { type: GraphQLString },
				completionRate: { type: GraphQLInt },
				instituteId: { type: GraphQLID }
			},
			resolve(parent, args) {
				let education = new Education({ ...args });
				return education.save();
			}
		},
		addSKill: {
			type: SkillType,
			args: {
				name: { type: GraphQLString },
				category: { type: CategoryEnumType },
				url: { type: GraphQLString }
			},
			resolve(parent, args) {
				let skill = new Skill({ ...args });
				return skill.save();
			}
		},
		addProfile: {
			type: ProfileType,
			args: {
				name: { type: GraphQLString },
				url: { type: GraphQLString }
			},
			resolve(parent, args) {
				let profile = new Profile({ ...args });
				return profile.save();
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
})