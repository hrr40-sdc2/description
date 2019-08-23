const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  photo_id: Number,
  house_id: Number,
  file_path: String,
  desc: String
});

module.exports = mongoose.model('Photo', PhotoSchema);
