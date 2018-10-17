import React, { Component } from "react";
import { Text, View } from "react-native";
import { Input, Button } from "react-native-elements";

import { styles } from "../screens/styles.js";

class DailyGoalForm extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
  }

  addDailyGoal = () => {
    if (this.state.inputText !== "") {
      this.props.onNewGoal({ goalText: this.state.inputText });
    }

    this.mainInput.clear();
  };

  clearGoals = () => {
    this.props.clearAllGoals();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <View style={{ width: 300, margin: 20 }}>
          <Input
            placeholderTextColor={this.props.screenProps.color}

            ref={input => {
              this.mainInput = input;
            }}
            placeholder={"Type here"}
            inputContainerStyle={{
              width: "100%",
              margin: 10,
              alignSelf: "stretch",
            }}
            inputStyle={{
              color: this.props.screenProps.color
            }}
            onChangeText={text => this.setState({ inputText: text })}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "stretch"
          }}
        >
          <Button
            title="Set as your goal"
            buttonStyle={{ backgroundColor: "orange", width: 300 }}
            onPress={this.addDailyGoal}
          />
          <Button
            title="Clear goal"
            buttonStyle={{ backgroundColor: "skyblue", width: 300 }}
            onPress={this.clearGoals}
          />
        </View>
      </View>
    );
  }
}

export default DailyGoalForm;
