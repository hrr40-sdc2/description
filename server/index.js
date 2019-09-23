const express = require('express');
require('dotenv').config();
var cors = require('./cors');
const House = require('./../database/House.js');
const Photo = require('./../database/Photo.js');
const { Pool } = require('pg');
const { username, password } = require('../config.js');

const pool = new Pool({
  host: 'localhost',
  username,
  password,
  database: 'housemania',
  port: 5432
});

const app = express();

// Middlewares
app.use(cors);
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));
// serve static image files in public if necessary
app.use(express.static(__dirname + '/../public'));

//postgreSQL
app.get('/api/houses', (req, res) => {
  const query = 'select * from homes, bedrooms, photos, amenities limit 1';
  pool.query(query)
    .then((data) => {
      res.send(data).status(200);
    });
});

app.get('/api/houses/:id', (req, res) => {
  const id = req.params.id;
  const query = `select * from homes where id = ${id}`;
  pool.query(query)
    .then((data) => {
      console.log(data.rows[0]);
      res.send(data.rows[0]).status(200);
    });
});

app.post('/api/houses', (req, res) => {
  const query = 'insert into homes(title, is_entire_place, location, super_host_name, super_host_photo, rating, description, space_desc, guest_desc, other_desc) values ($1,$2,$3,$4,$5,$6,$7,$8,$8,$10)'
  pool.query(query, [req.body.title, req.body.is_entire_place, req.body.location, req.body.super_host_name, req.body.super_host_photo, req.body.rating, req.body.description, req.body.space_desc, req.body.guest_desc, req.body.other_desc])
    .then(() => {
      res.sendStatus(201);
    });
});

app.put('/api/houses', (req, res) => {
  const query = 'update from homes ';
  pool.query(query)
    .then(() => {
      res.sendStatus(200);
    });
});

app.delete('/api/houses', (req, res) => {
  const id = req.params.id;
  const query = `delete from homes where id = ${id}`;
  pool.query(query)
    .then(() => {
      res.sendStatus(200);
    });
});


// API Endpoints
app.post('/houses', (req, res) => {
  House.create(req.body, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.sendStatus(201);
    }
  });
});

app.get('/houses/:id', (req, res, next) => {
  var houseId = req.params.id;

  House.findOne({ house_id: houseId }).populate('photos').exec((err, house) => {
    if (err) {
      console.log('error fetching this house', err);
      res.status(400).json({ success: false, message: 'Could not fetch this House from our Database' });
    } else {
      res.status(200).json(house);
    }
  });
});

app.get('/photos/houses/:id', (req, res, next) => {
  var houseId = req.params.id;

  Photo.find({ house_id: houseId }, (err, photos) => {
    if (err) {
      console.log('error fetching this house photos', err);
      res.status(400).json({ success: false, message: 'Could not fetch house photos from our Database' });
    } else {
      res.status(200).json(photos);
    }
  });
});

app.get('/houses/search/:qry', (req, res, next) => {
  var qry = req.params.qry;

  House.find({ $or: [ { title: { $regex: qry, $options: 'i' } }, { location: { $regex: qry, $options: 'i' } } ] }, (err, houses) => {
    if (err) {
      console.log('error searching house', err);
      res.status(400).json({ success: false, message: 'Could not search House from our Database' });
    } else {
      res.status(200).json(houses);
    }
  }).limit(10);
});

app.put('/houses/:id', (req, res) => {
  var id = req.param.id;
  var value = req.param.body;
  House.update({id: id}, {$set: value})
});

app.delete('/houses/:id', (req, res) => {
  var id = req.param.id;
  House.deleteOne({id: id}, (error, message) => {
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(204);
    }
  });
});

const port = process.env.PORT || 3010;

app.listen(port, () => {
  console.log(`Housemania Server is running at port ${port}`);
});
