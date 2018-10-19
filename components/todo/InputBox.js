import React from 'react';
import {TextInput, View} from 'react-native';
import {Icon} from "react-native-elements";

import { styles } from "../../screens/styles.js";

class InputBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() { // Setts initial value of box to blank, so that the placeholder will display
        this.setState({
            newValue: ''
        });
    }

    onChange = (event) => { // Keeps state updated with current value of inputbox
        let title = event.nativeEvent.text;
        this.setState({
            newValue: title
        });
    };

    onKeyPress = () => { // Sends input from inputbox to TodoApp for adding to task list
        if (this.state.newValue) {
            const task = this.state.newValue;
            this.setState({
                newValue: ''
            });
            this.props.onAdd(task);
        }
    };

    render() {
        return (
            <View style={styles(this.props.screenProps).inPutBoxTodo}
                >
                <TextInput style={styles(this.props.screenProps).inPutBoxTodoText}
                           placeholderTextColor={this.props.screenProps.color}
                           placeholder='Add a task'
                           blurOnSubmit={false}
                           value={this.state.newValue}
                           onSubmitEditing={this.onKeyPress}
                           onChange={this.onChange}>
                </TextInput>
                <View
                    style={this.state.newValue ? {} : {display: "none"}}
                    >
                    <Icon
                        size={35}
                        type="material-community"
                        name='plus-circle-outline'
                        color='#00aced'
                        onPress={this.onKeyPress}
                    />
                </View>
            </View>
        );
    }
}

module.exports = InputBox;
