import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';

export default class Menu extends Component {

  render () {
    return (
      <Section primary={true}>
        <Heading tag="h2">{'Katya\'s Page'}</Heading>
        <Paragraph>This is a paragraph in {'Katya\'s'} page</Paragraph>
      </Section>
    );
  }
};
