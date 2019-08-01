import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workLength: JSON.parse(localStorage.getItem('workTimer')) || 25,
      breakLength: JSON.parse(localStorage.getItem('breakTimer')) || 5,
      currentMinutes: JSON.parse(localStorage.getItem('workTimer')) || 25,
      currentSeconds: 0,
      currentSession: 'Work',
      currentButton: {
        func: () => this.countDown(),
        icon: 'fa-play',
        title: 'Play'
      },
      modalStyle: { display: 'none' },
      errorStyle: { display: 'none' }
    };
    this.timer = null;
    this.workTimer = this.state.workLength * 60;
    this.breakTimer = this.state.breakLength * 60;
    this.playTimer = this.playTimer.bind(this);
  }
}