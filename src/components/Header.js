import React, { Component } from 'react';
import HeaderLink from './HeaderLink.js';
import Panel from './Panel.js';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-Text">
          <HeaderLink name="Home" onClick={this.props.handler}/>
          <HeaderLink name="News" onClick={this.props.handler}/>
          <HeaderLink name="PVECalendar" onClick={this.props.handler}/>
          <HeaderLink name="PVPCalendar" onClick={this.props.handler}/>
          <HeaderLink name="Bounties" onClick={this.props.handler}/>
          <HeaderLink name="Streamers" onClick={this.props.handler}/>
          <HeaderLink name="Guilds" onClick={this.props.handler}/>
        </header>
      </div>
    );
  }
}

export default Header;
