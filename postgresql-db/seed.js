var faker = require('faker');

var createHouse = () => {
  var house = {
    title: faker.lorem.words(),
    location: faker.address.city(),
    super_host_name: faker.name.firstName(),
    super_host_photo: 'hi',
    rating: Math.floor(Math.random() * 5),
    desc: faker.lorem.paragraph(),
    space_desc: faker.lorem.paragraph(),
    guest_desc: faker.lorem.words(),
    other_desc: faker.lorem.words()
  }
  var image = {
    file_path: 'amazonawslink',
    desc: faker.lorem.paragraph()
  }
  var rooms = {
    size: randomSize(),
    bath: randomBath()
  }
  var amenity = {
    category: randomCategories(),
    item: randomItem(),
    desc: faker.lorem.words()
  }
};

