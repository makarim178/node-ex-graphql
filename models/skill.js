const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillSchema = new Schema({
    name: String,
    category: String,
    url: String
});

module.exports = mongoose.model('skill', skillSchema);