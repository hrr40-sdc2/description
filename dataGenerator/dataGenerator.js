var faker = require('faker');
var fs = require('fs');



const records = 10000000;
const houseData = fs.createWriteStream('./houses.csv', {encoding: 'utf8'});
const photoData = fs.createWriteStream('./photos.csv', {encoding: 'utf8'});
const roomData = fs.createWriteStream('./rooms.csv', {encoding: 'utf8'});
const amenData = fs.createWriteStream('./amenities.csv', {encoding: 'utf8'});


var createHouse = () => {
  (async() => {
    houseData.write('id,title,location,super_host_name,super_host_photo, rating,desc,space_desc,guest_desc,other_desc\n');
    for (var i = 1; i <= records; i++) {
        const id = i;
        const title = faker.lorem.words();
        const location = faker.address.city();
        const super_host_name = faker.name.firstName();
        const super_host_photo = faker.image.imageUrl();
        const rating = faker.random.number({min: 1, max: 5});
        const desc = faker.lorem.words();
        const space_desc = faker.lorem.words();
        const guest_desc = faker.lorem.words();
        const other_desc = faker.lorem.words();
        const House = `${id},${title},${location},${super_host_name},${super_host_photo},${rating},${desc},${space_desc},${guest_desc},${other_desc}\n`;
        if (!houseData.write(House, {flag: 'r+'})) {
          await new Promise(resolve => houseData.once('drain', resolve));
        }
      }
    })();
};

var createRooms = () => {
  (async() => {
    roomData.write('house_id,guests,size,bath\n');
    for (var i = 1; i <= records * 2; i++) {
      const house_id = i;
      const guests = faker.random.number({min: 1, max: 10});
      const size = faker.lorem.word();
      const bath = faker.random.number({min: 1, max: 3});
      const Room = `${house_id},${guests},${size},${bath}\n`;

      if (!roomData.write(Room, {flag: 'r+'})) {
        await new Promise(resolve => roomData.once('drain', resolve));
      }
    }
  })();
};



var createPhotos = () => {
  (async() => {
    photoData.write('id,house_id,file_path,desc\n');
    for (var i = 1; i <= records * 2; i++) {
      const id = i;
      const house_id = faker.random.number({min: 1, max: 10000000});
      const file_path = `https://hrr40-sdc-images.s3.us-east-2.amazonaws.com/sdc-house-images/houseimage${faker.random.number({min: 1, max: 1000})}.jpg`;
      const desc = faker.random.word();
      const Photo = `${id},${house_id},${file_path}, ${desc}\n`;
      if (!photoData.write(Photo, {flag: 'r+'})) {
        await new Promise(resolve => photoData.once('drain', resolve));
      }
    }
  })();
};

var createAmenities = () => {
  (async() => {
    amenData.write('id,house_id,category,item,desc\n');
    for (var i = 1; i <= records * 2; i++) {
      const id = i;
      const house_id = faker.random.number({min: 1, max: 10000000});
      const category = faker.random.word();
      const item = faker.random.word();
      const desc = faker.lorem.words();
      const Amenities = `${id},${house_id},${category},${item},${desc}\n`;
      if (!amenData.write(Amenities, {flag: 'r+'})) {
        await new Promise(resolve => amenData.once('drain', resolve));
      }
    }
  })();
}

createHouse()
createRooms()
createPhotos()
createAmenities()
