import React, { Component } from 'react';

class UpcomingEvents extends Component {

  render() {
    return (
      <div className="UpcomingEvents">
        <div className="PVEEvents">
          <h2>Upcoming PVE Events</h2>
          <ul className="EventList">
            <li className="EventListItem">
              Header Date Guild
            </li>
            <li className="EventListItem">
              Header Date Guild
            </li>
            <li className="EventListItem">
              Header Date Guild
            </li>
            <li className="EventListItem">
              Header Date Guild
            </li>
          </ul>
        </div>
        <div className="PVPEvents">
          <h2>Upcoming PVP Events</h2>
          <ul className="EventList">
            <li className="EventListItem">
              Header Date Guild
            </li>
            <li className="EventListItem">
              Header Date Guild
            </li>
            <li className="EventListItem">
              Header Date Guild
            </li>
            <li className="EventListItem">
              Header Date Guild
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UpcomingEvents;
