import React, { Component } from 'react';
import {
  Navigator,
  BackAndroid,
} from 'react-native';
import Tabs from '../routes/Tabs';
export class LifeQuest extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'Tabs'}}
        renderScene={this.renderScene}
        ref={(nav) => { navigator = nav; }}
        configureScene={this.configureScene}
      />
    );
  }

  configureScene(route, routeStack) {
    switch (route.name) {
      default:
        return Navigator.SceneConfigs.FadeAndroid;
    }
  }
  renderScene(route, navigator) {
    switch (route.name) {
      case 'Tabs':
        return <Tabs navigator={navigator}/>
      default:
        return null
    }
  }
}
BackAndroid.addEventListener('hardwareBackPress', () => {
  var currentRoutes = navigator.getCurrentRoutes();
  if (currentRoutes.length > 1) {
    requestAnimationFrame(() => {
      navigator.pop();
    });
    return true;
  }
  return false;
});
module.exports = LifeQuest;