import React, { Component } from 'react';

class NewsRoll extends Component {

  render() {
    const newsItems = this.props.newsTitles.map((title, article) => {
      return (<button onClick={() => this.props.onClick(article)} >{title}</button>);
    });
    return (
      <div className="NewsRoll">
        <ul>{newsItems}</ul>
      </div>
    );
  }
}

export default NewsRoll;
