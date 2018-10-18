import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";

import { HomeScreen, SettingsScreen, TodoScreen } from "./screens/";
import { loadData } from "./utils/localstorage.js";
import styles from "./screens/styles.js";

// createStackNavigator() funksjonen returnerer et react-objekt, som skal brukes som root-component!



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "white",
      bgColor: "white",
      color: "black",
      currentTheme: "defaultmode",
      initialRouteName: "Home",
    };
  }

  handleThemeChange = value => {
    this.setState({
      theme: value,
      initialRouteName: "Settings"
    });
    if (value == "nightmode") {
      this.setState({
        bgColor: "#1d1d1d",
        color: "white"
      });
    } else if (value == "defaultmode") {
      this.setState({
        bgColor: "white",
        color: "black"
      });
    }
  };

  checkTheme = () => {
    loadData("theme").then(result => this.handleThemeChange(result));
  }
  componentDidMount(){
    loadData("theme").then(result => this.handleThemeChange(result));
  }

  render() {

    console.log(this.state.bgColor);
    console.log(this.state.theme);
    const screenProps = {
      someText: "some text",
      handleThemeChange: this.handleThemeChange,
      bg: this.state.bgColor,
      color: this.state.color
    };
    return <RootStack screenProps={screenProps} />;
  }
}

export const RootStack = createBottomTabNavigator(
  {
    // The different screens listed below
    Home: { screen: HomeScreen },
    Todo: { screen: TodoScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    initialRouteName: "Home", // Defines starting screen (initial route)
    tabBarOptions: {
      style: {backgroundColor: "#3d3d3d"}
    }
  },
);
