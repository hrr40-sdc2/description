const mongoose = require('mongoose');
const mongo = require('./mongo.js');
const House = require('./House.js');
const Photo = require('./Photo.js');
const houses = require('./houses-data.json');
const photos = require('./photos-data.json');

console.log('MongoDB housemania will be seeded');

console.log('seeding House...');
House.create(houses, (err, results) => {
  if (err) {
    console.log('error seeding House', err);
  } else {
    console.log('house seeding completed!');
    console.log('seeding Photo...');
    Photo.create(photos, (err, results) => {
      if (err) {
        console.log('error seeding Photos', err);
      } else {
        console.log('photo seeding completed!');
        console.log('seeding is complete. You can start using the database');
        mongoose.disconnect();
      }
    });
  }
});
