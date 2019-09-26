import React from 'react';
import styled from 'styled-components';
import sc from './styled/OverviewPart.jsx';
import Bed from './icons/Bed.jsx';


const OverviewPart = sc.OverviewPart;
const PartHeader = sc.OverviewPartHeader;

const Bedroom = styled.div`
  margin: 10px 20px 10px 0;
  padding: 25px;
  display: inline-block;
  vertical-align: top;
  min-width: 137px;
  min-height: 97px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const BedroomNumber = styled.div`
  margin-top: 20px;
  font-weight: 500;
`;

const KingIcon = styled.svg`
  margin-right: 10px;
  display: inline-block;
  height: 28px;
  width: 28px;
  fill: currentcolor;
`;

const QueenIcon = styled.svg`
  margin-right: 10px;
  display: inline-block;
  height: 24px;
  width: 24px;
  fill: currentcolor;
`;

const NormalIcon = styled.svg`
  margin-right: 10px;
  display: inline-block;
  height: 20px;
  width: 20px;
  fill: currentcolor;
`;

const SleepingArragement = (props) => {

  const getBeds = (bedroom) => {
    if (!props.private_room) {
      return;
    }

    let beds = {
      normal: 0,
      queen: 0,
      king: 0
    };

    bedroom.beds.forEach((bed) => {
      beds[bed.size]++;
    });

    return beds;
  };

  const listBedIcons = (beds) => {
    let icons = [];
    // Add King bed
    for (let i = 0; i < beds.king; i++) {
      icons.push(
        <KingIcon key={'king-bed-' + i} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" >
          <Bed />
        </KingIcon>
      );
    }

    // Add Queen bed
    for (let i = 0; i < beds.queen; i++) {
      icons.push(
        <QueenIcon key={'queen-bed-' + i} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" >
          <Bed />
        </QueenIcon>
      );
    }

    // Add Normal bed
    for (let i = 0; i < beds.normal; i++) {
      icons.push(
        <NormalIcon key={'normal-bed-' + i} viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" >
          <Bed />
        </NormalIcon>
      );
    }


    return icons;
  };

  const listBedrooms = (beds) => {

    if (!props.private_room) {
      return;
    }

    // display only 4 at maximum
    let bedrooms = props.bedrooms.slice();

    return bedrooms.map((bedroom, ind) => {
      let beds = getBeds(bedroom);

      return (
        <Bedroom key={'sleeping-arrangement-' + ind}>
          <div>{listBedIcons(beds)}</div>
          <BedroomNumber>{'bedroom' + (ind + 1)}</BedroomNumber>
          <div>{beds.king > 0 ? beds.king + ' king beds' : '' }</div>
          <div>{beds.queen > 0 ? beds.queen + ' queen beds' : '' }</div>
          <div>{beds.normal > 0 ? beds.normal + ' normal beds' : '' }</div>
        </Bedroom>
      );
    });
  };


  return (
    <OverviewPart>
      <PartHeader>Sleeping Arrangement</PartHeader>
      {listBedrooms()}
    </OverviewPart>
  );
};

export default SleepingArragement;