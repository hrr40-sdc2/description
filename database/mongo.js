const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost/house';
module.exports = mongoose.connect(mongoUri);
