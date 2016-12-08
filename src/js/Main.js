import React, { Component } from 'react';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import NavDisplay from './NavDisplay';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label : "Main Menu"
    };
    this.onChangeRoute = this.onChangeRoute.bind(this);
  }
  onChangeRoute(menuName) {
    this.setState({
      label : menuName
    });
  }
  render() {
    return (
      <App centered={false}>
        <NavDisplay currentLabel={this.state.label} handleRouteChange={this.onChangeRoute} route={this.state.route}/>
        <Box pad={{horizontal: 'medium'}}>
          {this.props.children}
        </Box>
      </App>
    );
  }
};
