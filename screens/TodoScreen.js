import React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { styles } from './styles.js';

export default class TodoScreen extends Component{

  static navigationOptions = {
    title: 'Todo'
  };

  render(){
    const {screenProps} = this.props;
    return(
      <View style={styles(this.props.screenProps).container}>
        <Text style={styles(this.props.screenProps).text}>Todo Screen</Text>
      </View>
    );
  }
}
