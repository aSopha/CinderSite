import React, { Component } from 'react';
import NewsRoll from './NewsRoll.js';
import NewsArticle from './NewsArticle.js';
import {newsTitles, newsText} from '../NewsText.js';
import { CSSTransitionGroup } from 'react-transition-group'

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsMode: 'Main'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      newsMode: event
    });
    console.log(event);
  }

  render() {
    let display;
    const isMain = this.state.newsMode === 'Main';
    if (isMain) {
      display =
      <div className="NewsRoll">
        <CSSTransitionGroup
          transitionName="News"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <NewsRoll newsTitles={newsTitles} onClick={this.handleClick}/>
        </CSSTransitionGroup>
      </div>

    } else {
      display =
      <CSSTransitionGroup
        transitionName="NewsArticle"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <NewsArticle
        newsTitle={newsTitles[this.state.newsMode]}
        newsText={newsText[this.state.newsMode]}
        onClick={this.handleClick}/>
      </CSSTransitionGroup>

    }
    return (
      <div className="News">
          {display}
      </div>
    );
  }
}

export default News;
