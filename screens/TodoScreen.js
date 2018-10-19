import React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './styles.js';
import TodoApp from "../components/todo/TodoApp";

// Class for the TodoScreen component
export default class TodoScreen extends Component{

  // Values for the Tab in the BottomTabNavigator, title and icon.
  static navigationOptions = {
    title: 'Todo',
      tabBarIcon: (() => <Icon
          size={26}
          type="material-community"
          name='note'
          color='#00aced'
      />)
  };

  // Renders a scrollView with a TodoApp component
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
