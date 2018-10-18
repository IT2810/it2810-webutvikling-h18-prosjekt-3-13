import React from 'react';
import {TextInput, View} from 'react-native';
import {Icon} from "react-native-elements";

class InputBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.setState({
            newValue: ''
        });
    }

    onChange = (event) => {
        let title = event.nativeEvent.text;
        this.setState({
            newValue: title
        });
    };

    onKeyPress = () => {
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
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
                >
                <TextInput style={{flex: 1, height: 36, fontSize: 16, margin: 8, paddingLeft: 10,  borderWidth: 1, borderColor: '#eee', borderRadius: 8, backgroundColor: '#fff'}}
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