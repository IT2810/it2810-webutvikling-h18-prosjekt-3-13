import React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View, Button} from 'react-native';
import styles from './styles.js';

export default class SettingsScreen extends Component{


  static navigationOptions = {
    title: 'Settings'
  };

  handleThemeOnePress = () => {
    const callBackFunction = this.props.screenProps.handleThemeChange;
    callBackFunction("nightmode");
  }

  handleThemeTwoPress = () => {
    const callBackFunction = this.props.screenProps.handleThemeChange;
    callBackFunction("white");
  }

  render(){
    const {screenProps} = this.props;
    return(
      <View style={[styles.container, {backgroundColor: screenProps.bgColor}]}>
        <Text style={{color: screenProps.color}}>Settings Screen</Text>
        <Text style={{color: screenProps.color}}>Press a button to change the colortheme</Text>
        <Button title="Nightmode" onPress={this.handleThemeOnePress} />
        <Button title="Defaultmode" onPress={this.handleThemeTwoPress} />
      </View>
    );
  }
}
