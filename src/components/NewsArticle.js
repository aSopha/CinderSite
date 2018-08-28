import React, { Component } from 'react';
import EscapeButton from './EscapeButton.js';

class NewsArticle extends Component {

  render() {
    return (
      <div className="NewsArticle">
        <EscapeButton onClick={this.props.onClick} text="Back"/>
        <h2>{this.props.newsTitle}</h2>
        <p>{this.props.newsText}</p>
      </div>
    );
  }
}

export default NewsArticle;
