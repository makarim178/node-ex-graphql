const mongoose = require('mongoose');
const { Schema } = mongoose;

const instituteSchema = new Schema({
	name: String,
	locationId: String,
	url: String
});

module.exports = mongoose.model('Institute', instituteSchema);
