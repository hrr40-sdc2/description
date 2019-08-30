import React from 'react';
import styled from 'styled-components';
import Parking from './icons/Parking.jsx';


const SearchResults = ({ houses = [] }) => {

  const ResultsContainer = styled.div`
    padding: 10px;
    display: ${houses.length > 0 ? 'block' : 'none'}
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1;
  `;

  const House = styled.div`
    padding: 5px;
    height: 30px;
    cursor: pointer;
    line-height: 30px;

    &:hover {
      background-color: #e7e7e7;
    }
  `;

  const Icon = styled.svg`
    margin: 6px;
    float: left;
    height: 19px;
    width: 19px;
    fill: currentcolor;
  `;

  const listHouses = () => {

    // display only 4 at maximum
    let listHouses = houses.slice();

    return listHouses.map((house, ind) => {
      return (
        <House key={house.house_id + '-summary-' + ind}>
          <Icon viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" >
            <Parking />
          </Icon>
          {house.title}
        </House>
      );
    });
  };


  return (
    <ResultsContainer>
      {listHouses()}
    </ResultsContainer>
  );
};

export default SearchResults;