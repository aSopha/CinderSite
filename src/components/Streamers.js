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
          <StreamPanel streamerInfo="Streamer Info" imgUrl = "/../imgs/Colossus.jpg"/>
          <StreamPanel streamerInfo="Streamer Stuff" imgUrl = "/../imgs/Thor.jpg"/>
          <StreamPanel streamerInfo="Stream Deets" imgUrl = "/../imgs/Ultralisk.jpg"/>
          <StreamPanel streamerInfo="Yea Yea" imgUrl = "/../imgs/Zealot.jpg"/>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Streamers;
