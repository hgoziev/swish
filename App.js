import React, {Component} from 'react';

import AppNavigator from './navigation/AppNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import Onboarding from './screens/Onboarding/Onboarding';
import Shop from './screens/Shop/Shop';

export default class App extends Component {
  state = {
    firstLaunch: null,
  };
  componentDidMount() {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        this.setState({firstLaunch: true});
      } else {
        this.setState({firstLaunch: false});
      }
    });
  }
  render() {
    if (this.state.firstLaunch === null) {
      return null;
    } else if (this.state.firstLaunch == true) {
      return <Onboarding />;
    } else {
      return <AppNavigator />;
    }
  }
}
