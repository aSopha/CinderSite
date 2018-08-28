import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import './App.css';
import './GuildPanel.css';
import './Calendar.css';
import './Streamers.css';
import './Home.css';
import Panel from './components/Panel.js';
import Header from './components/Header.js';
import Title from './components/Title.js';
import News from './components/News.js';
import LatestNews from'./components/LatestNews.js';
import UpcomingEvents from './components/UpcomingEvents.js';
import PVECalendar from './components/PVECalendar.js';
import PVPCalendar from './components/PVPCalendar.js';
import Bounties from './components/Bounties.js';
import Streamers from './components/Streamers.js';
import Guilds from './components/Guilds.js';
import OutsideAlerter from "./components/OutsideWrapper.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'Home'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      mode: event
    });
    console.log(event);
  }
  render() {

    let display;
    if (this.state.mode === 'Home') {
      display =
        <div className="HomeMode">
          <CSSTransitionGroup
            transitionName="Home"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <LatestNews newsTitle="~LATEST NEWS!~" newsText="news news news news news news news news "/>
            <UpcomingEvents />
          </CSSTransitionGroup>

        </div>
    } else if (this.state.mode === 'News') {
      display =
        <div className="NewsMode">
              <News key={'news'} show={true} />
        </div>
    } else if (this.state.mode === 'PVECalendar') {
      display =
        <div className="PVECalendarMode">
          <PVECalendar />
        </div>
    } else if (this.state.mode === 'PVPCalendar') {
      display =
        <div className="PVPCalendarMode">
          <PVPCalendar />
        </div>
    } else if (this.state.mode === 'Bounties') {
      display =
        <div className="BountiesMode">
          <Bounties />
        </div>
    } else if (this.state.mode === 'Streamers') {
      display =
        <div className="StreamersMode">
          <Streamers />
        </div>
    } else if (this.state.mode === 'Guilds') {
      display =
        <div className="GuildsMode">
          <Guilds />
        </div>
    }
    return (
      <div className="App">
        <Title />
        <Header handler={this.handleClick}/>
          {display}
      </div>
    );
  }
}

export default App;
