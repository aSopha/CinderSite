import React, { Component } from 'react';

class StreamPanel extends Component {

  render() {
    const text = this.props.text;
    const panelStyle = {
      backgroundImage: `url(${this.props.imgUrl})`
    }
    return (
      <div className="StreamPanel">
        <button className="StreamPanel-Button" style={panelStyle} >
        </button>
        <p className="StreamPanelInfo">{this.props.streamerInfo}</p>
      </div>
    );
  }
}

export default StreamPanel;
