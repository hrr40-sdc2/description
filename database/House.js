const mongoose = require('mongoose');
const mongo = require('./mongo.js');

const HouseSchema = new mongoose.Schema({
  house_id: Number,
  title: String,
  location: String,
  private_room: {
    guest: Number,
    bedrooms: [
      {
        beds: [
          {
            size: String
          }
        ]
      }
    ],
    bath: Number
  },
  super_host_name: String,
  super_host_photo: String,
  rating: Number,
  desc: String,
  space_desc: String,
  guest_desc: String,
  other_desc: String,
  amenities: [
    {
      category: String,
      item: String,
      desc: String
    }
  ],
  availability: []

}, { toJSON: { virtuals: true } }
);

// IMPORTANT
// this code above: { toJSON: { virtuals: true }
// ensure that Mongoose will add the virtual relations when transforming into JSON
// for response. Ex: res.status(200).json(house)

/*
- https://mongoosejs.com/docs/populate.html#populate-virtuals
So far you've only populated based on the _id field.
However, that's sometimes not the right choice.
In particular, arrays that grow without bound are a MongoDB anti-pattern.
Using mongoose virtuals, you can define more sophisticated relationships between documents.
*/
HouseSchema.virtual('photos', {
  ref: 'Photo',
  localField: 'house_id',
  foreignField: 'house_id',
  justOne: false // set true for one-to-one relationship
});

module.exports = mongoose.model('House', HouseSchema);
