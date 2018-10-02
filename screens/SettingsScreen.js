import React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default class SettingsScreen extends Component{

  static navigationOptions = {
    title: 'Settings'
  };

  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Settings Screen</Text>
      </View>
    );
  }
}
