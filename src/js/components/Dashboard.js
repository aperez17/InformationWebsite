import React, { Component } from 'react';
import DashboardView from './DashboardView';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      currentDate: '',
      currentText : ''
    };
    this.updateActivities = this.updateActivities.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDOMChange = this.handleDOMChange.bind(this);
  }
  updateActivities(newActivity) {
    var newActivities = this.state.activities;
    newActivities.push(newActivity);
    this.setState({
      activities : newActivities,
      currentDate : this.state.currentDate,
      currentText : this.state.currentText
    });
  }
  handleClick(a) {
    if (a.preventDefault) {
      a.preventDefault();
    }
    var splitDate = this.state.currentDate.split(' ');
    var day = splitDate[0];
    var time = splitDate[1] + splitDate[2];
    this.updateActivities({day: day, time: time, name: this.state.currentText});
    return false;
  }
  handleDateChange(value) {
    this.setState({
      activities: this.state.activities,
      currentDate: value,
      currentText: this.state.currentText
    });
  }
  handleDOMChange(e) {
    this.setState({
      activities: this.state.activities,
      currentDate: this.state.currentDate,
      currentText: e.target.value
    });
  }
  render () {
    return (
      <DashboardView
        activities={this.state.activities}
        currentDate={this.state.currentDate}
        onDateChange={this.handleDateChange}
        onDOMChange={this.handleDOMChange}
        handleClick={this.handleClick}
        placeHolder={'Activity Name'}/>
    );
  }
};
