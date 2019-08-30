import React from 'react';
import styled from 'styled-components';
import Lens from './icons/Lens.jsx';
import SearchResults from './SearchResults.jsx';

const SearchContainer = styled.div`
  margin: 16px 16px 16px 0;
  padding: 0 10px;
  display: inline-block;
  position: relative;
  vertical-align: top;
  height: 48px;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0px 2px 4px #eee;
`;

const Icon = styled.svg`
  margin 16px 5px;
  height:18px;
  width:18px;
  display:inline-block;
  fill:currentColor;
`;

const SearchInput = styled.input`
  margin: 10px;
  display:inline-block;
  vertical-align: top;
  height: 26px;
  font-size: 17px;
  font-weight: 600;
  border: none;
  outline: none;
`;

class Search extends React.Component {

  constructor() {
    super();

    this.state = {
      houses: []
    };

    this.results = [];
  }

  componentDidMount() {
    console.log('search mounted');
  }

  handleSearch(event) {
    const qry = event.target.value;
    console.log(event.target);
    console.log(qry);

    this.results.push({ title: 'House Description ' + qry.length });

    this.setState({
      houses: this.results
    });
  }

  handleQuitSearch(event) {
    this.results = [];
    this.setState({
      houses: this.results
    });
  }

  render() {
    return (
      <SearchContainer id="overview-house-search" >
        <Icon viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" >
          <Lens />
        </Icon>
        <SearchInput name="overview-qry" placeholder="Search"
          onChange={this.handleSearch.bind(this)} type="text"
          onBlur={this.handleQuitSearch.bind(this)} />

        <SearchResults houses={this.state.houses}/>
      </SearchContainer>

    );
  }
}

export default Search;