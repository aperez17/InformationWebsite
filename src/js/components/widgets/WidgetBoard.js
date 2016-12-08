import React, { Component } from 'react';
import WidgetPanel from './WidgetPanel';

export default class WidgetBoard extends Component {
  render() {
    return (
      <div>
        <WidgetPanel text="ONE" one="1" two="2" three="3"></WidgetPanel>
      </div>
    );
  }
}
