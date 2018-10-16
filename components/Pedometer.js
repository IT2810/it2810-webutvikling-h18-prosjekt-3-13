import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { Button } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import saveData from "../utils/localstorage.js";
import { loadData } from "../utils/localstorage.js";
import styles from '../screens/styles.js';


export default class PedometerSensor extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
    inputText: "Type your new stepgoal here",
    stepGoal: 10000,
  };

  componentDidMount() {
    loadData("stepGoal").then(result => this.setState({stepGoal: result}))
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  updateStepGoal = () => {
    // Only change goal if it is a number greater than 0 and does not contain '.'
    if(!(isNaN(this.state.inputText)) && this.state.inputText > 0 && !(this.state.inputText.indexOf('.') > -1)){
      this.setState({
      stepGoal: this.state.inputText,
      }
    );
      saveData("stepGoal", this.state.inputText);
    }
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  getProgressPercent(direction){
    const progressPercent = this.state.pastStepCount/this.state.stepGoal;
    if(direction == "left"){
      if(progressPercent > 0.5){
        return Math.floor(progressPercent*100)+'%';
      }
      else return "";
    }
    if(direction == "right"){
      if(1 - progressPercent > 0.5){
        return Math.floor(progressPercent*100)+'%';
      }
      else return "";
    }
  }

  getProgressColor(){
    if(this.state.pastStepCount/this.state.stepGoal >= 1){
      return "#49e800";
    }
    else if(this.state.pastStepCount/this.state.stepGoal >= 0.9){
      return "#a5ff00";
    }
    else if(this.state.pastStepCount/this.state.stepGoal >= 0.5){
      return "yellow";
    }
    else if(this.state.pastStepCount/this.state.stepGoal >= 0.33){
      return "orange";
    }
    else{
      return "#a30000";
    }
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    const {textStyle} = this.props;
    const progressColor = this.getProgressColor();
    const leftText = this.getProgressPercent("left");
    const rightText = this.getProgressPercent("right");
    return (
      <View>
        <Text style={{color: textStyle}}>
          Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}
        </Text>
        <Text style={{color: textStyle}}>
          Steps taken in the last 24 hours: {this.state.pastStepCount}
        </Text>
        <Text style={{color: textStyle}}>
          {textStyle}
        </Text>
        <Text style={{color: textStyle}}>Walk! And watch this go up: {this.state.currentStepCount}</Text>
        <Text>Current daily stepgoal: {this.state.stepGoal}</Text>
        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
            justifyContent: "center",
          }}>
          <View style={{backgroundColor: progressColor, flex: (this.state.pastStepCount/this.state.stepGoal), justifyContent: "center", alignItems: "center"}}>
          <Text style={{color: "black"}}>{leftText}</Text></View>
          <View style={{backgroundColor: "lightgrey", flex: (1- this.state.pastStepCount/this.state.stepGoal), justifyContent: "center", alignItems: "center"}}><Text style={{color: "black"}}>{rightText}</Text>
          </View>
        </View>
        <TextInput
          placeholder={"Type your new stepcount goal here"}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          onChangeText={text => this.setState({ inputText: text })}
        />
        <Button
          title="Set as your goal"
          buttonStyle={{ backgroundColor: "orange", width: 300 }}
          onPress={this.updateStepGoal}
        />
      </View>
    );
  }
}

Expo.registerRootComponent(PedometerSensor);
