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


const Amenities = (props) => {

  return (
    <OverviewPart>
      <PartHeader>Amenities</PartHeader>
      <List>
        <Item>
          <Icon viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" >
            <Wifi />
          </Icon>
          Wifi
        </Item>
        <Item>
          <Icon viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" >
            <Hangers />
          </Icon>
          Hangers
        </Item>
        <Item>
          <Icon viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" >
            <Kitchen />
          </Icon>
          Kitchen
        </Item>
        <Item>
          <Icon viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" >
            <Parking />
          </Icon>
          Free parking on premises
        </Item>
      </List>
    </OverviewPart>
  );
};

export default Amenities;