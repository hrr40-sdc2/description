var request = require('request');
var expect = require('chai').expect;

describe('House Mania API Testing', function() {

  it('Should retrieve the house data with ID 1 from the DB', function(done) {
    request('http://127.0.0.1:3010/houses/1', function(error, response, body) {
      if (error) {
        console.log('error house', error);
      }
      var house = JSON.parse(body);
      expect(typeof house).to.equal('object');
      expect(house.house_id).to.equal(1);
      done();
    });
  });

  it('Should retrieve all the photos of house with ID 1 from the DB', function(done) {
    request('http://127.0.0.1:3010/photos/houses/1', function(error, response, body) {
      if (error) {
        console.log('error house photos', error);
      }
      var photos = JSON.parse(body);
      expect(Array.isArray(photos)).to.be.true;
      expect(photos[0].house_id).to.equal(1);
      done();
    });
  });

  it('Should retrieve houses whose title and location match the search query', function(done) {
    request('http://127.0.0.1:3010/houses/search/consectetuer', function(error, response, body) {
      if (error) {
        console.log('error search house', error);
      }
      var houses = JSON.parse(body);
      expect(Array.isArray(houses)).to.be.true;
      expect(houses.length).to.equal(2);
      expect(houses[0].house_id).to.equal(74);
      expect(houses[1].house_id).to.equal(99);
      done();
    });
  });

  xit('Should retrieve a House with ID directly on MongoDB', function(done) {

  });

});
