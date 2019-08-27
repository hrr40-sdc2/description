import React from 'react';
import styled from 'styled-components';
import Logo from './icons/Logo.jsx';
import Search from './Search.jsx';
import Menu from './Menu.jsx';
import Banner from './Banner.jsx';
import Description from './Description.jsx';
import Amenities from './Amenities.jsx';
import SleepingArrangement from './SleepingArrangement.jsx';
import Availability from './Availability.jsx';



const HouseContent = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #484848;
  background-color: #fff;
  margin: 0;
  -webkit-font-smoothing: antialiased;
`;

const TopBar = styled.div`
  width: 100% !important;
  height: 80px !important;
`;

const LogoContainer = styled.div`
  margin: 23px 16px;
  display: inline-block;
  width: 34px;
  height: 34px;
  color: #FF5A5F;
`;

const HouseDetailsContent = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1080px !important;
  font-size: 16px;
`;

const OverviewContainer = styled.div`
  max-width: 600px;
`;

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <HouseContent id="overview-house-content">
        <header>
          <TopBar>
            <LogoContainer>
              <Logo />
            </LogoContainer>
            <Search />
            <Menu />
          </TopBar>
          <Banner />
        </header>
        <HouseDetailsContent id="overview-details-content">
          <OverviewContainer id="overview-container">
            <Description />
            <Amenities />
            <SleepingArrangement />
            <Availability />
          </OverviewContainer>
        </HouseDetailsContent>
      </HouseContent>
    );
  }
}

export default App;