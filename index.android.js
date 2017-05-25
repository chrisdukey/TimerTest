/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';
import timer from 'react-native-timer'

export default class TimerTest extends React.Component {

  constructor() {
    super()
    this.showTheMsg = this.showTheMsg.bind(this)
    this.state = {
      showMsg: false
    };
  }

  componentWillUnmount() {
    timer.clearTimeout(this);
  }

  showTheMsg() {
    this.setState({showMsg: true}, () => timer.setTimeout(
      this, 'hideMsg', () => this.setState({showMsg: false}), 2000
    ));
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => requestAnimationFrame(() => this.showTheMsg())}>
          <Text>Press Me</Text>
        </TouchableOpacity>

        {this.state.showMsg ? (
          <Text>Hello!!</Text>
        ) : (
          null
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TimerTest', () => TimerTest);
