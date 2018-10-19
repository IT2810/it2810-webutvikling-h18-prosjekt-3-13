import React from 'react';
import { Component } from 'react';

import { StyleSheet, Text, View, Button} from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './styles.js';

import saveData from '../utils/localstorage.js';
import { loadData } from '../utils/localstorage.js';

export default class SettingsScreen extends Component{


  static navigationOptions = {
    title: 'Settings',
      tabBarIcon: (() => <Icon
          size={26}
          type="material-community"
          name='settings'
          color='#00aced'
      />)
  };

  handleThemeOnePress = () => {
    const callBackFunction = this.props.screenProps.handleThemeChange;
    saveData("theme", "nightmode");
    callBackFunction("nightmode");
  }

  handleThemeTwoPress = () => {
    const callBackFunction = this.props.screenProps.handleThemeChange;
    saveData("theme", "defaultmode");
    callBackFunction("defaultmode");
  }

  render(){
    const {screenProps} = this.props;
    return(
      <View style={styles(this.props.screenProps).container}>
        <Text style={styles(this.props.screenProps).text}>Settings Screen</Text>
        <Text style={styles(this.props.screenProps).text}>Press a button to change the colortheme</Text>
        <Button title="Nightmode" onPress={this.handleThemeOnePress} />
        <Button title="Defaultmode" onPress={this.handleThemeTwoPress} />
      </View>
    );
  }
}
