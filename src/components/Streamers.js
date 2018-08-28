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
          <StreamPanel streamerInfo="Streamer Info" imgUrl = "./Colossus.jpg"/>
          <StreamPanel streamerInfo="Streamer Stuff" imgUrl = "./Thor.jpg"/>
          <StreamPanel streamerInfo="Stream Deets" imgUrl = "./Ultralisk.jpg"/>
          <StreamPanel streamerInfo="Yea Yea" imgUrl = "./Zealot.jpg"/>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default Streamers;
