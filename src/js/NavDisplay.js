import React, { Component } from 'react';

import Anchor from 'grommet/components/Anchor';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

import { browserHistory } from 'react-router';

export default class NavDisplay extends Component {
  render() {
    return (
      <Header direction="row" justify="between" pad={{horizontal: 'medium'}}>
        <Title><Anchor href="/" onClick={(event) => {
          event.preventDefault();
          browserHistory.push('/');
          this.props.handleRouteChange('Main Menu');
        }} label='InformationApp' /></Title>
        <Anchor href="/menu" onClick={(event) => {
          event.preventDefault();
          if (this.props.currentLabel === 'Dashboard') {
            browserHistory.push('/');
            this.props.handleRouteChange('Main Menu');
          } else {
            browserHistory.push('/menu');
            this.props.handleRouteChange('Dashboard');
          }
        }} label={this.props.currentLabel} />
      </Header>
    );
  }
};
