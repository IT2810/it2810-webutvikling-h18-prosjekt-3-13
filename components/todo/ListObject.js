import React from "react";
import { Text, View } from "react-native";
import { ListItem, Icon } from "react-native-elements";

class ListObject extends React.Component {
  constructor(props) {
    super(props);
  }

  onCompletePress = () => {
    // Function for passing completion-event to TodoApp
    this.props.handleChange(this.props.data);
  };

  onDeletePress = () => {
    // Function for passing deletion-event to TodoApp
    this.props.handleDelete(this.props.data);
  };

  render() {
    return (
      <ListItem
        containerStyle={{ backgroundColor: this.props.screenProps.bg }}
        key={this.props.data.createdAt}
        title={
          <View
            style={{
              paddingLeft: "2%",
              backgroundColor: this.props.screenProps.bg
            }}
          >
            <Text
              style={
                this.props.data.completed
                  ? {
                      textDecorationLine: "line-through",
                      textDecorationStyle: "solid",
                      color: "lightgrey"
                    }
                  : { color: this.props.screenProps.color }
              }
            >
              {this.props.data.task}
            </Text>
          </View>
        }
        rightIcon={
          <Icon
            size={26}
            type="material-community"
            name="delete"
            color="#00aced"
            onPress={this.onDeletePress}
            onLongPress={() => console.log("ignore")}
          />
        }
        leftIcon={
          <Icon
            size={35}
            type="material-community"
            name={
              this.props.data.completed
                ? "check-circle"
                : "checkbox-blank-circle-outline"
            }
            color="#00aced"
            onPress={this.onCompletePress}
            onLongPress={() => console.log("ignore aswaell")}
          />
        }
      />
    );
  }
}

module.exports = ListObject;
