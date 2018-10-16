import React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import styles from './styles.js';
import ListView from "../components/todo/TodoApp";

export default class TodoScreen extends Component{

  static navigationOptions = {
    title: 'Todo'
  };

  render(){
    const {screenProps} = this.props;
    return(
      <View style={[styles.containerTodo, {backgroundColor: screenProps.bgColor}]}>
          <ListView/>
      </View>
    );
  }
}
