import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import $ from 'jquery';
import Logo from './icons/Logo.jsx';
import Search from './Search.jsx';
import Menu from './Menu.jsx';
import FloatingTopBar from './FloatingTopBar.jsx';
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
  -moz-osx-font-smoothing: grayscale;
`;

const TopBar = styled.div`
  width: 100% !important;
  height: 80px !important;
`;

const LogoContainer = styled.div`
  margin: 23px 23px;
  display: inline-block;
  width: 34px;
  height: 34px;
  color: #FF5A5F;
`;

const Icon = styled.svg`
  display: block;
  fill: currentcolor;
`;

const HouseDetailsContent = styled.div`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1032px !important;
  font-size: 16px;
`;

const OverviewContainer = styled.div`
  max-width: 600px;
`;

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      house: {},
      floatTopBar: false
    };

    // Amazon Server HOST will be by default. Set to local if in Env settings
    // this.host = process.env.HOUSEMANIA_HOST || 'http://housemania-overview.us-west-1.elasticbeanstalk.com';
  }


  componentDidMount() {
    this.loadHouse((house) => {
      console.log('house', house);
      this.setState({
        house
      });
    });

    //const list = ReactDOM.findDOMNode(this.refs.list);
    //list.addEventListener('scroll', this.handleScroll);

    $(window).on('scroll', this.handleScroll.bind(this, window));
  }

  componentWillUnmount() {
    //const list = ReactDOM.findDOMNode(this.refs.list);
    //list.removeEventListener('scroll', this.handleScroll);
    $(window).off('scroll');
  }

  loadHouse(callback) {
    // var host = this.host;

    $.ajax({
      method: 'GET',
      url: '/api/houses',
      contentType: 'application/json',
      cache: false,
      success: callback,
      error: (err) => {
        console.log('error fetching the house', err);
      }
    });
  }

  handleScroll(window) {
    var currentScroll = $(window).scrollTop();
    //console.log('window scrolled', currentScroll);
    if (currentScroll >= 373) {
      // update state to display floating top bar
      if (!this.state.floatTopBar) {
        this.setState({ floatTopBar: true });
      }

    } else {
      if (this.state.floatTopBar) {
        this.setState({ floatTopBar: false });
      }
    }
  }

  render() {
    return (
      <HouseContent id="overview-house-content" >
        <FloatingTopBar show={this.state.floatTopBar} />
        <header>
          <TopBar>
            <LogoContainer>
              <Icon viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" >
                <Logo />
              </Icon>
            </LogoContainer>
            <Search />
            <Menu />
          </TopBar>
          <Banner photos={this.state.house.photos} />
        </header>
        <HouseDetailsContent id="overview-details-content">
          <OverviewContainer id="overview-container">
            <Description house={this.state.house} />
            <Amenities amenities={this.state.house.amenities} />
            {/* <SleepingArrangement private_room={this.state.house.bedrooms} /> */}
          </OverviewContainer>
        </HouseDetailsContent>
      </HouseContent>
    );
  }
}

export default App;