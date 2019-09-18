const { username, password } = require('../config.js');
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  username,
  password,
  database: 'housemania',
  port: 5432
});

const copyHouses = "\COPY public.home FROM '../dataGenerator/houses.csv' WITH DELIMITER ',' csv HEADER";
const copyRooms = "\COPY public.rooms FROM '../dataGenerator/rooms.csv' WITH DELIMITER ',' csv HEADER";
const copyPhotos = "\COPY public.photos FROM '../dataGenerator/photos.csv' WITH DELIMITER ',' csv HEADER";
const copyAmenities = "\COPY public.amenities FROM '../dataGenerator/amenities.csv' WITH DELIMITER ',' csv HEADER";

pool.connect((err) => {
  if (err) {
    console.log(err);
  }
});

const copyTables = () => {
  pool.query(copyHouses , (err) => {
    if (err) {
      console.log(err);
    }
  })
  pool.query(copyRooms, (err) => {
    if (err) {
      console.log(err);
    }
  })
  pool.query(copyPhotos, (err) => {
    if (err) {
      console.log(err);
    }
  })
  pool.query(copyAmenities, (err) => {
    if (err) {
      console.log(err);
    }
  })
}


copyTables();