const mongoose = require('mongoose');
const config = require('./../../config/config.js');
module.exports = mongoose.connect(config.MONGO_URI);
