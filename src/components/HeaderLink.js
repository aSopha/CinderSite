import React, { Component } from 'react';

class HeaderLink extends Component {
  render() {
    return (
      <div className="HeaderLink">
        <a className="HeaderLink-Text" href={this.props.link} onClick={() => this.props.onClick(this.props.name)}>
          {this.props.name}
        </a>
      </div>
    );
  }
}

export default HeaderLink;
