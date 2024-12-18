const mongoose = require('mongoose');
const { Schema } = mongoose;

const educationSchema = new Schema({
	gradType: String,
	gradName: String,
	yearStart: Number,
	yearEnd: Number,
	monthStart: Number,
	monthEnd: Number,
	status: String,
	completionRate: Number,
	instituteId: String
});

module.exports = mongoose.model('Education', educationSchema);
