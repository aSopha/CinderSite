import React, { Component } from 'react';

class Panel extends Component {

  render() {
    const text = this.props.text;
    const panelStyle = {
      backgroundImage: `url(${this.props.imgUrl})`
    }
    return (
      <div className="Panel">
        <button className="Panel-Button" style={panelStyle} onClick={() => this.props.onClick(text)}>
        </button>
      </div>
    );
  }
}

export default Panel;
