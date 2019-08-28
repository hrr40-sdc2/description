import React from 'react';
import styled from 'styled-components';
import sc from './styled/OverviewPart.jsx';


const OverviewPart = sc.OverviewPart;
const PartHeader = sc.OverviewPartHeader;

const Bedroom = styled.div`
  margin: 10px 20px 10px 0;
  padding: 20px;
  display: inline-block;
  vertical-align: top;
  min-width: 180px;
  min-height: 145px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const BedroomNumber = styled.div`
  margin-top: 70px;
  font-weight: 500;
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

  const listBedrooms = () => {

    if (!props.private_room) {
      return;
    }

    // display only 4 at maximum
    let bedrooms = props.private_room.bedrooms.slice();

    return bedrooms.map((bedroom, ind) => {
      let beds = getBeds(bedroom);

      return (
        <Bedroom key={'sleeping-arrangement-' + ind}>
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