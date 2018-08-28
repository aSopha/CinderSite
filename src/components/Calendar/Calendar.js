import React, { Component } from 'react';
import CalendarBox from './CalendarBox.js';
import { CSSTransitionGroup } from 'react-transition-group'

class Calendar extends Component {

  renderBox(i) {
    return (
          <CalendarBox
            value={i}
          />
    );
  }

  renderHeader(color) {
    return (
      <div className="CalendarHeader">
        <CalendarBox day={'Sunday'} color={color} />
        <CalendarBox day={'Monday'} color={color} />
        <CalendarBox day={'Tuesday'} color={color} />
        <CalendarBox day={'Wednesday'} color={color} />
        <CalendarBox day={'Thursday'} color={color} />
        <CalendarBox day={'Friday'} color={color} />
        <CalendarBox day={'Saturday'} color={color} />
      </div>
    )
  }

  render() {
    return (
      <div className="Calendar">
        <CSSTransitionGroup
          transitionName="Calendar"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          {this.renderHeader(this.props.color)}
          <div className="CalendarRow">
            {this.renderBox(0)}
            {this.renderBox(1)}
            {this.renderBox(2)}
            {this.renderBox(3)}
            {this.renderBox(4)}
            {this.renderBox(5)}
            {this.renderBox(6)}
          </div>
          <div className="CalendarRow">
            {this.renderBox(7)}
            {this.renderBox(8)}
            {this.renderBox(9)}
            {this.renderBox(10)}
            {this.renderBox(11)}
            {this.renderBox(12)}
            {this.renderBox(13)}
          </div>
          <div className="CalendarRow">
            {this.renderBox(14)}
            {this.renderBox(15)}
            {this.renderBox(16)}
            {this.renderBox(17)}
            {this.renderBox(18)}
            {this.renderBox(19)}
            {this.renderBox(20)}
          </div>
          <div className="CalendarRow">
            {this.renderBox(21)}
            {this.renderBox(22)}
            {this.renderBox(23)}
            {this.renderBox(24)}
            {this.renderBox(25)}
            {this.renderBox(26)}
            {this.renderBox(27)}
          </div>
          <div className="CalendarRow">
            {this.renderBox(28)}
            {this.renderBox(29)}
            {this.renderBox(30)}
            {this.renderBox(31)}
            {this.renderBox(32)}
            {this.renderBox(33)}
            {this.renderBox(34)}
          </div>
          <div className="CalendarFooter">
            <div className="CaldendarFooterGuild" style={{color:'red'}}>Cinder</div>
            <div className="CaldendarFooterGuild" style={{color:'blue'}}>Other Guild</div>
            <div className="CaldendarFooterGuild" style={{color:'green'}}>Another Guild</div>
          </div>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Calendar;
