import React, { Component } from 'react';

class GuildPanel extends Component {

  render() {
    const text = this.props.text;
    const panelStyle = {
      backgroundImage: `url(${this.props.imgUrl})`
    }
    return (
      <div className="GuildPanel">
        <h1 class="Name">{this.props.guild.name}</h1> <br/>
        <p class="Bio">{this.props.guild.bio}</p> <br/>
        <p class="Times">{this.props.guild.raidTimes}</p> <br/>
        <p class="Times">{this.props.guild.pvpTimes}</p> <br/>
        <p class="NeedsHeader">Recruitment Needs</p> <br/>
        <p class="Needs">{this.props.guild.recruitmentNeeds}</p> <br/>
        <h2 class="Contacts">{this.props.guild.contacts}</h2> <br/>
      </div>
    );
  }
}

export default GuildPanel;
