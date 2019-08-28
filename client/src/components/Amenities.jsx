import React from 'react';
import styled from 'styled-components';
import sc from './styled/OverviewPart.jsx';
import Wifi from './icons/Wifi.jsx';
import Hangers from './icons/Hangers.jsx';
import Kitchen from './icons/Kitchen.jsx';
import Parking from './icons/Parking.jsx';


const OverviewPart = sc.OverviewPart;
const PartHeader = sc.OverviewPartHeader;

const List = styled.ul`
  margin: 20px 0 0 0;
  padding: 0;
`;

const Item = styled.li`
  display: inline-block;
  list-style-type: none;
  min-width:160px;
  width: 48%;
  height: 50px;
`;

const Icon = styled.svg`
  margin-right: 10px;
  float: left;
  height: 19px;
  width: 19px;
  fill: currentcolor;
`;

const Button = styled.button`
  margin-top: 10px;
  color: #008489;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: none !important;

  &:hover {
    text-decoration: underline;
  }
`;


const Amenities = (props) => {

  const getItemIcon = (item) => {
    if (item === 'Wifi') {
      return (<Wifi />);
    } else if (item === 'Hangers') {
      return (<Hangers />);
    } else if (item === 'Kitchen') {
      return (<Kitchen />);
    } else if (item === 'Free parking on premises') {
      return (<Parking />);
    } else {
      // by default, use Parking
      // TODO: change to a default amenities item
      return (<Parking />);
    }
  };

  const listAmenities = () => {

    if (!props.amenities) {
      return;
    }

    // display only 4 at maximum
    let amenities = props.amenities.slice(0, 4);

    return amenities.map((amenity, ind) => {
      return (
        <Item key={amenity.item + '-summary-' + ind}>
          <Icon viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" >
            {getItemIcon(amenity.item)}
          </Icon>
          {amenity.item}
        </Item>
      );
    });
  };

  return (
    <OverviewPart>
      <PartHeader>Amenities</PartHeader>
      <List>
        {listAmenities()}
      </List>
      <div>
        <Button>{props.amenities ? 'Show all ' + props.amenities.length + ' amenities' : 'No Amenity'}</Button>
      </div>
    </OverviewPart>
  );
};

export default Amenities;