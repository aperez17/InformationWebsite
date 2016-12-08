import React, { Component } from 'react';
import SplitPane from 'react-split-pane';

export default class WidgetBoard extends Component {
  render() {
    return (
      <SplitPane split="vertical" minSize={50} maxSize={900} defaultSize={900} className="primary">
        <div className="animated-border">
          <div style={{backgroundColor:"green",position:"absolute",height:"100%",width:"99.5%",margin:1}}><p>One</p></div>
        </div>
        <SplitPane split="horizontal">
          <div className="animated-border">
            <div style={{backgroundColor:"red",position:"absolute",height:"100%",width:"99.5%",margin:1}}><p>Two</p></div>
          </div>
          <div className="animated-border">
            <div style={{backgroundColor:"blue",position:"absolute",height:"100%",width:"99.5%",margin:1}}><p>Three</p></div>
          </div>
        </SplitPane>
      </SplitPane>
    );
  }
}
