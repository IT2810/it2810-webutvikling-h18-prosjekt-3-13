import React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default class TodoScreen extends Component{

  static navigationOptions = {
    title: 'Todo'
  };

  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Todo Screen</Text>
      </View>
    );
  }
}
