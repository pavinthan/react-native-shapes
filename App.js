/**
 * Bootstrap application with native base.
 */
import React, { Component } from 'react';
import Application from './src/Root';
import { Root } from 'native-base';

class App extends Component {
  render() {
    return (
      <Root>
        <Application />
      </Root>
    );
  }
}

export default App;
