import React from 'react';
import styled from 'styled-components';
import sc from './styled/OverviewPart.jsx';


const OverviewPart = sc.OverviewPart;
const PartHeader = sc.OverviewPartHeader;

const TitleContainer = styled.section`
  display: inline-block;
  width: 80%;
`;

const TitleHeader = styled.h1`
  margin: 0;
  font-size: 32px;
`;

const Location = styled.span`
  margin: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const HostContainer = styled.div`
  padding: 0 5px;
  float: right;
  text-align: center;
  font-size: 14px;
  color: #767676;
`;

const HostPhoto = styled.img`
  height: 64px;
  width: 64px;
  background-color:#777;
  border-radius: 32px;
`;

const Summary = styled.div`
  margin-top: 48px;
  clear: both;
  border-bottom: 1px solid #eee;
`;

const SummaryItem = styled.div`
  margin-bottom: 24px;
`;

const ItemIconContainer = styled.div`
  margin-right: 22px;
  display: inline-block;
`;

const ItemIcon = styled.img`
  margin-top:3px;
  height: 16px;
  width: 16px;
  background-color: #aaa;
`;

const ItemDetails = styled.div`
  margin: 0;
  display: inline-block;
  vertical-align: top;
`;

const DescriptionContainer = styled.div`
  margin-top: 24px;
`;



const Description = (props) => {

  return (
    <OverviewPart>
      <TitleContainer className="title">
        <TitleHeader>House Title Type and Category</TitleHeader>
        <div><Location className="location">Location</Location></div>
      </TitleContainer>

      <HostContainer className="host-photo">
        <HostPhoto src="/fake-image.jpg" />
        <div>Keitel</div>
      </HostContainer>

      <Summary>

        <SummaryItem>
          <ItemIconContainer>
            <ItemIcon src="/fake-icon.png" />
          </ItemIconContainer>
          <ItemDetails>
            <PartHeader>Private Room</PartHeader>
            Private Room summary
          </ItemDetails>
        </SummaryItem>

        <SummaryItem>
          <ItemIconContainer>
            <ItemIcon src="/fake-icon.png" />
          </ItemIconContainer>
          <ItemDetails>
            <PartHeader>Superhost</PartHeader>
            Super Host Services
          </ItemDetails>
        </SummaryItem>

        <SummaryItem>
          <ItemIconContainer>
            <ItemIcon src="/fake-icon.png" />
          </ItemIconContainer>
          <ItemDetails>
            <PartHeader>Check-in Experience</PartHeader>
            Users Rating
          </ItemDetails>
        </SummaryItem>

      </Summary>

      <DescriptionContainer>
        Main Description A room w/ a queen bed & a loft with another queen bed in a quiet nbrhd. Close to both the 25 and 40 freeway. A block from restaurants, supermarket and bus stop. Enjoy staying at this urban homestead with chickens, rabbits & garden. Late Arrivals ok.
      </DescriptionContainer>
      <DescriptionContainer>
        <PartHeader>The Space</PartHeader>
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
      </DescriptionContainer>
      <DescriptionContainer>
        <PartHeader>Guest Access</PartHeader>
        Guest Access Description
      </DescriptionContainer>
      <DescriptionContainer>
        <PartHeader>Other things to note</PartHeader>
        Other things Description
      </DescriptionContainer>
    </OverviewPart>
  );
};

export default Description;