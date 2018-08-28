import React, { Component } from 'react';

class EscapeButton extends Component {

  render() {
    return (
      <div className="EscapeButton">
        <button className="EscapeButton-Button" onClick={() => this.props.onClick('Main')}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default EscapeButton;
