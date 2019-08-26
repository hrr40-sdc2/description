import React from 'react';

const Description = (props) => {

  return (
    <section id="overview-description" className="overview-part" >
      <div className="title">
        <h1>House Title Type and Category</h1>
        <div><span className="location">Location</span></div>
      </div>
      <div className="host-photo">
        <img src="/fake-image.jpg" />
        <div>Keitel</div>
      </div>
      <div className="summary">
        <div className="item">
          <div className="icon" >
            <img src="/fake-icon.png" />
          </div>
          <div className="details" >
            <h2 className="part-header" >Private Room</h2>
            Private Room summary
          </div>
        </div>
        <div className="item">
          <div className="icon" >
            <img src="/fake-icon.png" />
          </div>
          <div className="details">
            <h2 className="part-header" >Superhost</h2>
            Super Host Services
          </div>
        </div>
        <div className="item">
          <div className="icon" >
            <img src="/fake-icon.png" />
          </div>
          <div className="details">
            <h2 className="part-header" >Check-in Experience</h2>
            Users Rating
          </div>
        </div>
      </div>

      <div className="description">
        Main Description A room w/ a queen bed & a loft with another queen bed in a quiet nbrhd. Close to both the 25 and 40 freeway. A block from restaurants, supermarket and bus stop. Enjoy staying at this urban homestead with chickens, rabbits & garden. Late Arrivals ok.
      </div>
      <div className="description">
        <h2 className="part-header" >The Space</h2>
        House Space Description We are just minutes away from interstate 25 and 40 in a quite and safe neighborhood.
The room is attached to our home, however it has a private entrance. this room has AIR CONDITIONING, the shared bathroom is centrally located the house.
It has a tall ceiling with a loft, 3 sky lights and a potbelly stove. A coffee maker and little fridge are provided.
There are some steps up and down.
There are 2 queen size beds; one on the loft. You need to use a ladder to get to it. We can add a play pen (pack and play) to the room.
Pets allowed but check in first to see if it works for other guests. some have allergies.
we share the kitchen and bathroom with you.
The house doesn't have AC just a swamp cooler. There are young children in the house and a visiting cat.
location:
1.3 miles (4 min) to interstate 25 and 40
3 miles (10 min) to Old Town
5 miles (13 min) to UNM (university)
8 miles (15 min) to Sunport Airport
a block away from restaurants, bus stop, french bakery (baguettes like you get in France), drugstore, supermarket and the cheapest gas station in town.

6 miles (15 min) to Balloon Fiesta Park
13 miles (25 min) to the Sandia Tramway gives access to ski lifts or
31 miles (45 min) driving to the ski lifts at Sandia Crest
18 miles (30 min) to Double Eagle II Airport

If you like to stay longer then a couple of nights please contact us first so we can connect and see if this would work for all of us.
      </div>
      <div className="description">
        <h2 className="part-header" >Guest Access</h2>
        Guest Access Description
      </div>
      <div className="description">
        <h2 className="part-header" >Other things to note</h2>
        Other things Description
      </div>
    </section>
  );
};

export default Description;