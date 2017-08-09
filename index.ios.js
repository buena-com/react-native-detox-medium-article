import React, { Component } from 'react';
import {AppRegistry} from 'react-native';

import EmployeeDirectoryApp from './app/EmployeeDirectoryApp';

class AppWrapper extends Component {
  render() {
    return (
      <EmployeeDirectoryApp />
    );
  }
}

AppRegistry.registerComponent('EmployeeDirectory', () => AppWrapper);
