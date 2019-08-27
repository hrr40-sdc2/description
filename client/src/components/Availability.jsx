import React from 'react';
import styled from 'styled-components';
import sc from './styled/OverviewPart.jsx';


const OverviewPart = sc.OverviewPart;
const PartHeader = sc.OverviewPartHeader;

class Availability extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <OverviewPart>
        <PartHeader>Availability</PartHeader>
        <div className="overview-calendar-month">
          <span>September 2019</span>
        </div>
        <div className="overview-calendar-month">
          <span>October 2019</span>
        </div>
      </OverviewPart>
    );
  }
}

export default Availability;