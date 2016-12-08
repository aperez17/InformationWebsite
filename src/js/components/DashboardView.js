import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import WidgetBoard from './widgets/WidgetBoard';

export default class DashboardView extends Component {

  render () {
    return (
      <Section primary={true}>
        <WidgetBoard />
      </Section>
    );
  }
};
