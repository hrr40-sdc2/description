const express = require('express');
const config = require('./../config/config.js');

const app = express();

app.use(express.json());
// serve static image files in public if necessary
app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res, next) => {
  //console.log('root endpoint GET request');
  res.status(200).json({success: true});
});

app.listen(config.EXPRESS_PORT, () => {
  console.log(`Housemania Server is running at port ${config.EXPRESS_PORT}`);
});
