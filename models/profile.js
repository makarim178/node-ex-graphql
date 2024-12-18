const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
    name: String,
    url: String
});

module.exports = mongoose.model('Profile', profileSchema);