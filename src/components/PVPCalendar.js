import React, { Component } from 'react';
import Calendar from './Calendar/Calendar.js';

class PVPCalendar extends Component {

  render() {
    return (
      <div className="PVPCalendar">
       <Calendar color="DarkRed"/>
      </div>
    );
  }
}

export default PVPCalendar;
