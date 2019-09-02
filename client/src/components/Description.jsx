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
  height: 12px;
  width: 12px;
`;

const ItemDetails = styled.div`
  margin: 0;
  display: inline-block;
  vertical-align: top;
  max-width: 90%;
`;

const RoomUnit = styled.span`
  margin-right: 20px;
`;

const DescriptionContainer = styled.div`
  margin-top: 24px;
`;



const Description = ({ house = {}}) => {

  // TODO: change this to Amazon S3
  let path = '/photos/host/';

  let room = {
    guest: 0,
    bedroom: 0,
    bed: 0,
    bath: 0
  };

  const loadRoomUnitInfo = () => {
    let units = house.private_room;

    if (units) {
      room.guest = units.guest;
      room.bath = units.bath;
      if (units.bedrooms.length) {
        room.bedroom = units.bedrooms.length;

        room.bed = units.bedrooms.reduce((acc, bedroom) => {
          return acc + bedroom.beds.length;
        }, 0);
      }
    }

    //console.log('loaded room', room);
  };

  loadRoomUnitInfo();

  return (
    <OverviewPart>
      <TitleContainer className="title">
        <TitleHeader>{house.title ? house.title.slice(0, 30) : ''}</TitleHeader>
        <div><Location className="location">{house.location}</Location></div>
      </TitleContainer>

      <HostContainer className="host-photo">
        <HostPhoto src={path + house.super_host_photo} />
        <div>{house.super_host_name}</div>
      </HostContainer>

      <Summary>

        <SummaryItem>
          <ItemIconContainer>
            <ItemIcon src="/icons/house-black-icon.png" />
          </ItemIconContainer>
          <ItemDetails>
            <PartHeader>Private room in house</PartHeader>
            <RoomUnit>{room.guest} guests</RoomUnit>
            <RoomUnit>{room.bedroom} bedrooms</RoomUnit>
            <RoomUnit>{room.bed} beds</RoomUnit>
            <RoomUnit>{room.bath} baths</RoomUnit>
          </ItemDetails>
        </SummaryItem>

        <SummaryItem>
          <ItemIconContainer>
            <ItemIcon src="/icons/key-black-icon.png" />
          </ItemIconContainer>
          <ItemDetails>
            <PartHeader>Great check-in experience</PartHeader>
            {house.rating}% of recent guests gave the check-in process a 5-star rating.
          </ItemDetails>
        </SummaryItem>

        <SummaryItem>
          <ItemIconContainer>
            <ItemIcon src="/icons/medal-black-icon.png" />
          </ItemIconContainer>
          <ItemDetails>
            <PartHeader>{house.super_host_name} is a Superhost</PartHeader>
            Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
          </ItemDetails>
        </SummaryItem>

      </Summary>

      <DescriptionContainer>
        {house.desc}
      </DescriptionContainer>
      <DescriptionContainer>
        <PartHeader>The Space</PartHeader>
        {house.space_desc}
      </DescriptionContainer>
      <DescriptionContainer>
        <PartHeader>Guest Access</PartHeader>
        {house.guest_desc}
      </DescriptionContainer>
      <DescriptionContainer>
        <PartHeader>Other things to note</PartHeader>
        {house.other_desc}
      </DescriptionContainer>
    </OverviewPart>
  );
};

export default Description;