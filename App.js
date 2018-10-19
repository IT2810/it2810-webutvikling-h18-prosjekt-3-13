import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";

import { HomeScreen, SettingsScreen, TodoScreen } from "./screens/";
import { loadData } from "./utils/localstorage.js";
import styles from "./screens/styles.js";


// The app itself returns the RootStack which is what is rendered to the screen
// See RootStack further down.

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // STATE to keep track of colorscheme used in the app.
    this.state = {
      theme: "white",
      bgColor: "white",
      color: "black",
      currentTheme: "defaultmode",
      initialRouteName: "Home", // initialRoute points to the screen being loaded when app opens
    };
  }

  // This is a function that is used as a callbackfunction in SettingsScreen
  // further down in the component-tree. Used to change state of colorscheme.
  handleThemeChange = value => {
    this.setState({
      theme: value,
      initialRouteName: "Settings"
    });
    if (value == "nightmode") {
      this.setState({
        bgColor: "#1d1d1d",
        bgColorSecondary: "#7c7c7c",
        color: "white"
      });
    } else if (value == "defaultmode") {
      this.setState({
        bgColor: "white",
        bgColorSecondary: "#7c7c7c",
        color: "black"
      });
    }
  };

  // Function to check which theme is in AsyncStorage (last theme used when app was opened)
  checkTheme = () => {
    loadData("theme").then(result => this.handleThemeChange(result));
  }

  // When app opens, load the last selected theme
  componentDidMount(){
    loadData("theme").then(result => this.handleThemeChange(result));
  }

  render() {
    // Props to be passed down into the screen components
    const screenProps = {
      someText: "some text",
      handleThemeChange: this.handleThemeChange,
      bg: this.state.bgColor,
      bgSec: this.state.bgColorSecondary,
      color: this.state.color
    };
    // The actual RootStack - component.
    return <RootStack screenProps={screenProps} />;
  }
}

  // RootStack component, creates a react-navigation BottomTabNavigator.
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
      // Styling for the BottomTabNavigator
      style: {backgroundColor: "#3d3d3d",
              paddingBottom: 10,
              paddingTop: 10,
              height: "10%"}
    }
  },
);
