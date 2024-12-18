const mongoose = require('mongoose');
const { Schema } = mongoose;

const experienceSchema = new Schema({
	orgName: String,
	orgLocationId: String,
	jobTitle: String,
	jobDescription: String,
	jobAchievements: [String],
	skillIds: [String],
	yearStart: Number,
	yearEnd: Number,
	monthStart: Number,
	monthEnd: Number
});

module.exports = mongoose.model('Experience', experienceSchema);
