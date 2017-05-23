import React, { Component } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Quests from './Quests';
import Preferences from './Preferences';
import Logs from './Logs';
import Misc from '../helpers/Misc';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#222',
  },
  tab: {
    padding: 0,
  },
  icon: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  indicator: {
    flex: 1,
    backgroundColor:'black',
    margin: 4,
    borderRadius: 0,
  },
  badge: {
    marginTop: 4,
    marginRight: 32,
    backgroundColor: '#f44336',
    height: 24,
    width: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  count: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -2,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Tabs extends Component {

  static title = 'Bottom bar with indicator';
  static appbarElevation = 4;

  static propTypes = {
    style: View.propTypes.style,
  };

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Quests', icon: 'tasks' },
      { key: '2', title: 'Logs', icon: 'line-chart' },
      { key: '3', title: 'Preferences', icon: 'gear' },
    ],
  };

  handleChangeTab = (index) => {
    this.setState({
      index,
    });
  };

  renderIndicator = (props) => {
    const { width, position } = props;

    const translateX = Animated.multiply(position, width);

    return (
      <Animated.View
        style={[ styles.container, { width, transform: [ { translateX } ] } ]}
      >
        <View style={styles.indicator} />
      </Animated.View>
    );
  };

  renderIcon = ({ route }: any) => {
    return (
      <Ionicons
        name={route.icon}
        size={24}
        style={styles.icon}
      />
    );
  };

  renderFooter = (props) => {
    return (
      <TabBar
        {...props}
        renderIcon={this.renderIcon}
        renderIndicator={this.renderIndicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
      />
    );
  };

  renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      let image = Misc.getBackgroundImage();
      console.log(image);
      return <Quests data={image}/>;
    case '2':
      return <Logs/>
    case '3':
      return <Preferences/>;
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[ styles.container, this.props.style ]}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderFooter={this.renderFooter}
        onRequestChangeTab={this.handleChangeTab}
      />
    );
  }
}