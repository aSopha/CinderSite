import React, { Component } from 'react';
import StreamPanel from './StreamPanel.js';
import { CSSTransitionGroup } from 'react-transition-group'

class Streamers extends Component {

  render() {
    return (
      <div className="Streamers">
        <CSSTransitionGroup
          transitionName="Calendar"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <StreamPanel streamerInfo="Streamer Info" imgUrl = "%PUBLIC_URL%/Colossus.jpg"/>
          <StreamPanel streamerInfo="Streamer Stuff" imgUrl = "%PUBLIC_URL%/Thor.jpg"/>
          <StreamPanel streamerInfo="Stream Deets" imgUrl = "%PUBLIC_URL%/Ultralisk.jpg"/>
          <StreamPanel streamerInfo="Yea Yea" imgUrl = "%PUBLIC_URL%/Zealot.jpg"/>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Streamers;
