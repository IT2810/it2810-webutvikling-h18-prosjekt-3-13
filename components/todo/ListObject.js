import React from 'react';
import {Text, View} from 'react-native';
import { ListItem, Icon} from 'react-native-elements';
import { styles } from '../../screens/styles.js';

class ListObject extends React.Component{
    constructor(props) {
        super(props);
    }

    onCompletePress = () => {
        this.props.handleChange(this.props.data);
    };

    onDeletePress = () => {
        this.props.handleDelete(this.props.data);
    };

    test = () => {
        alert("listItem")
    };

    render() {
        console.log("Screenprops: " + this.props.screenProps.bg.toString());
        return (
                <ListItem
                    containerStyle={{ backgroundColor: this.props.screenProps.bg }}
                        key={this.props.data.createdAt}
                        title={
                            <View style={{paddingLeft: "2%", backgroundColor: this.props.screenProps.bg}}>
                                <Text style={this.props.data.completed ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: "lightgrey"} : {color: this.props.screenProps.color}}>{this.props.data.task}</Text>
                            </View>}
                        rightIcon={
                                <Icon
                                size={26}
                                type="material-community"
                                name='delete'
                                color='#00aced'
                                onPress={this.onDeletePress}
                                onLongPress={() => console.log("ignore")}
                            />}
                        leftIcon={
                            <Icon
                                size={35}
                                type="material-community"
                                name={this.props.data.completed ? 'check-circle' : 'checkbox-blank-circle-outline'}
                                color='#00aced'
                                onPress={this.onCompletePress}
                                onLongPress={() => console.log("ignore aswaell")}
                            />
                        }
                    />

        );
    }
}

module.exports = ListObject;
