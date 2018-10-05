import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";

import { HomeScreen, SettingsScreen, TodoScreen } from "./screens/";

// createStackNavigator() funksjonen returnerer et react-objekt, som skal brukes som root-component!

const RootStack = createBottomTabNavigator(
  {
    // The different screens listed below
    Home: { screen: HomeScreen },
    Todo: { screen: TodoScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    initialRouteName: "Home" // Defines starting screen (initial route)
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
