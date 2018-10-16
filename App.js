import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import { HomeScreen, SettingsScreen, TodoScreen } from './screens/';
import styles from './screens/styles.js';

// createStackNavigator() funksjonen returnerer et react-objekt, som skal brukes som root-component!

const RootStack = createBottomTabNavigator({  // The different screens listed below
  Home: { screen: HomeScreen },
  Todo: { screen: TodoScreen },
  Settings: { screen: SettingsScreen },
},
{
  initialRouteName: 'Home'  // Defines starting screen (initial route)
});

export default class App extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      theme: "white",
      bgColor: "white",
      color: "black",
    }
  }

  handleThemeChange = (value) => {
    this.setState({
      theme: value
    });
    if(value == "nightmode"){
      this.setState({
        bgColor: "#1d1d1d",
        color: "white",
      })
    }
    else if (value == "white") {
      this.setState({
        bgColor: "white",
        color: "black",
      })
    }
  }

  render() {
    //console.log(this.state.theme);
    const screenProps ={
      someText: "some text",
      handleThemeChange: this.handleThemeChange,
      bgColor: this.state.bgColor,
      color: this.state.color,
    }
    return (
      <RootStack screenProps={screenProps} theme={this.state.bgColor}/>
    );
  }
};
