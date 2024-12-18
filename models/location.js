const mongoose = require('mongoose');
const { Schema } = mongoose;

const locationSchema = new Schema({
	city: String,
	provinceAbbr: String,
	countryAbbr: String
});

module.exports = mongoose.model('Location', locationSchema);
