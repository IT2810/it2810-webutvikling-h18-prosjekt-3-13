import React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './styles.js';
import TodoApp from "../components/todo/TodoApp";


export default class TodoScreen extends Component{

  static navigationOptions = {
    title: 'Todo',
      tabBarIcon: (() => <Icon
          size={26}
          type="material-community"
          name='note'
          color='#00aced'
      />)
  };

  render(){
    const {screenProps} = this.props;
    return(
        <View style={styles(this.props.screenProps).container2do}>
      <ScrollView contentContainerStyle={styles(this.props.screenProps).containerTodo}>
          <TodoApp screenProps={this.props.screenProps}/>
      </ScrollView>
        </View>
    );
  }
}
