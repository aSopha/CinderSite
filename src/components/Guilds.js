import React, { Component } from 'react';
import GuildPanel from './GuildPanel.js';
import {Cinder1, Cinder2, Cinder3} from './../GuildInfo.js';
import { CSSTransitionGroup } from 'react-transition-group'

class Guilds extends Component {

  render() {
    return (
      <div className="Guilds">
        <CSSTransitionGroup
          transitionName="GuildPanel"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
        <GuildPanel guild={Cinder1}/>
        <GuildPanel guild={Cinder2}/>
        <GuildPanel guild={Cinder3}/>
      </CSSTransitionGroup>
      </div>
    );
  }
}

export default Guilds;
