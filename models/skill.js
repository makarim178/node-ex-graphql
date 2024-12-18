const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillSchema = new Schema({
  name: String,
  categoryId: String,
  url: String,
});

module.exports = mongoose.model('skill', skillSchema);
