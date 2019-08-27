import React from 'react';
import styled from 'styled-components';
import sc from './styled/OverviewPart.jsx';


const OverviewPart = sc.OverviewPart;
const PartHeader = sc.OverviewPartHeader;

const SleepingArragement = (props) => {

  return (
    <OverviewPart>
      <PartHeader>Sleeping Arrangement</PartHeader>
      <div className="bedroom">
        <div>Bedroom1</div>
        <div>2 Queen Beds</div>
      </div>
    </OverviewPart>
  );
};

export default SleepingArragement;