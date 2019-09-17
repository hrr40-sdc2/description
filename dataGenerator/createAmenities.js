const faker = require('faker');
var amenities = [];

var createAmenities = () => {
  for (var i = 0; i < 4; i++) {
    var amenity = {
      category: faker.lorem.word(),
      item: faker.lorem.word(),
      desc: faker.lorem.words()
    };
    amenities.push(amenity);
  }
};

module.exports = amenities;