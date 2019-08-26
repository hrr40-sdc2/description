import React from 'react';
import Logo from './icons/Logo.jsx';
import Search from './Search.jsx';
import Menu from './Menu.jsx';
import Banner from './Banner.jsx';
import Description from './Description.jsx';
import Amenities from './Amenities.jsx';
import SleepingArrangement from './SleepingArrangement.jsx';
import Availability from './Availability.jsx';

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div id="overview-house-content">
        <header>
          <div id="overview-topbar" >
            <div id="overview-logo">
              <Logo />
            </div>
            <Search />
            <Menu />
          </div>
          <Banner />
        </header>
        <div id="overview-details-content">
          <section id="overview-container">
            <Description />
            <Amenities />
            <SleepingArrangement />
            <Availability />
          </section>
        </div>
      </div>
    );
  }
}

export default App;