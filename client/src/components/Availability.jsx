import React from 'react';

class Availability extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="overview-availability" className="overview-part" >
        <h2>Availability</h2>
        <div className="overview-calendar-month">
          <h3>September 2019</h3>
        </div>
        <div className="overview-calendar-month">
          <h3>October 2019</h3>
        </div>
      </section>
    );
  }
}

export default Availability;