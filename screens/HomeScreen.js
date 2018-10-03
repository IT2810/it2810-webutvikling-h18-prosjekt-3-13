import React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View, Button} from 'react-native';
import styles from './styles.js';

export default class HomeScreen extends Component{

  static navigationOptions = {
    title: "Home"
  };

  render(){
    const {navigation, screenProps} = this.props;
    return(
      <View style={[styles.container, {backgroundColor: screenProps.bgColor}]}>
        <Text style={{color: screenProps.color}}>Home Screen</Text>
        <Text style={{color: screenProps.color}}>{screenProps.someText}</Text>
      </View>
    );
  }
}

// If calling navigate --> stacknavigator will check for existing route, if no existing, it will add the route to the stack. If you for some reason want to add another route of a preexisting route on the stack (I.E to pass unique params) --> use push() instead of navigate().

//If you want to force user to go back, call this.props.navigation.goBack()
