import React from "react";
import { Component } from "react";

import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles.js";
import ListView from "../components/todo/TodoApp";

export default class TodoScreen extends Component {
  static navigationOptions = {
    title: "Todo"
  };

  render() {
    return (
      <View style={styles(this.props.screenProps).containerTodo}>
        <ListView screenProps={this.props.screenProps} />
      </View>
    );
  }
}
