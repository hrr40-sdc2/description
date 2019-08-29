const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/house';
module.exports = mongoose.connect(mongoUri);
