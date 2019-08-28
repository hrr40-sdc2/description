import React from 'react';
import styled from 'styled-components';
import sc from './styled/OverviewPart.jsx';


const OverviewPart = sc.OverviewPart;
const PartHeader = sc.OverviewPartHeader;

const DateList = styled.div`
  margin: 10px 0;
  height: 90px;
  overflow: auto;
`;

const DateAvailable = styled.span`
  margin: 10px 20px 10px 0;
  padding: 5px;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 3px;
`;

class Availability extends React.Component {

  constructor(props) {
    super(props);
  }

  listDates() {
    if (!this.props.availability) {
      return;
    }

    // display only 4 at maximum
    let dates = this.props.availability.slice();

    return dates.map((date, ind) => {
      return (
        <DateAvailable key={'availability-' + ind}>{date + ''}</DateAvailable>
      );
    });
  };

  render() {
    return (
      <OverviewPart>
        <PartHeader>Availability</PartHeader>
        <DateList>{this.listDates()}</DateList>
      </OverviewPart>
    );
  }
}

export default Availability;