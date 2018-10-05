import React, { Component } from "react";
import { Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import saveData from "../utils/localstorage";

class DailyGoalForm extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
  }

  addDailyGoal = () => {
    this.props.onNewGoal({ goalText: this.state.inputText });
    this.mainInput.clear(); // TODO: Få dene til å fungere
  };

  clearGoals = () => {
    this.props.clearAllGoals();
  };

  render() {
    return (
      <View style={{ width: "100%", alignItems: "center" }}>
        <Text>What is your daily goal?</Text>
        <Input
          ref={input => {
            this.mainInput = input;
          }}
          placeholder={"Type here"}
          inputContainerStyle={{ width: "90%", margin: 10 }}
          onChangeText={text => this.setState({ inputText: text })}
        />
        <Button
          small
          icon={{ name: "star", type: "font-awesome", color: "white" }}
          title="Add goal"
          containerStyle={{ width: "90%" }}
          buttonStyle={{ backgroundColor: "orange" }}
          onPress={this.addDailyGoal}
        />
        <Button
          small
          icon={{ name: "star", type: "font-awesome", color: "white" }}
          title="Clear all goals"
          containerStyle={{ width: "90%" }}
          buttonStyle={{ backgroundColor: "orange" }}
          onPress={this.clearGoals}
        />
      </View>
    );
  }
}

export default DailyGoalForm;
