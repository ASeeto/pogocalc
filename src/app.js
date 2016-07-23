'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Main from './containers/main/';

/*
 *  Returns the main container for this application.
 *  Passes any initial props to main component necessary for rendering.
 */
const App = () => {
  return <Main />;
};

AppRegistry.registerComponent('pogocalc', () => App);

export default App;