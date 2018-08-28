import React, { Component } from 'react';

class LatestNews extends Component {

  render() {
    return (
      <div className="LatestNews">
        <h2>{this.props.newsTitle}</h2>
        <p>{this.props.newsText}</p>
      </div>
    );
  }
}

export default LatestNews;
