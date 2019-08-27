import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin: 16px ;
  display: inline-block;
  vertical-align: top;
  height: 48px;
  width: 250px;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0px 2px 4px #eee;
`;

const SearchInput = styled.input`
  margin: 10px ;
  height: 26px;
  width: 90%;
  font-size: 16px;
  font-weight: 800;
  border: none;
`;

const Search = (props) => {

  return (
    <SearchContainer id="overview-house-search" >
      <SearchInput type="text" name="overview-qry" placeholder="Search..." />
    </SearchContainer>
  );
};

export default Search;