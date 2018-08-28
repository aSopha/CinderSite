import React, { Component } from 'react';
import {September} from './../../CalendarInfo.js';

class CalendarBox extends Component {

  render() {
    if(this.props.day) {
      const headerClass = `CalendarHeaderBox${this.props.color}`
      return (
        <div className={headerClass}>
          {this.props.day}
        </div>
      );
    }
    return (
      <div className="CalendarBox">
        <p className="CalendarBoxDate">{September[this.props.value]} </p>
      </div>
    );
  }
}

export default CalendarBox;
