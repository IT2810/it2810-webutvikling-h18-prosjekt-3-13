import React from 'react';
import { View } from 'react-native';
import ListObject from './ListObject'


class PartList extends React.Component{
    constructor(props) {
        super(props);
    }

    onCompletePress = (task) => {
        this.props.handleChange(task);
    };

    onDeletePress = (task) => {
        this.props.handleDelete(task);
    };

    render() {
        return (
            <View>
            {this.props.list.map(item =>
                <ListObject screenProps={this.props.screenProps} key={item.createdAt} data={item} handleDelete={this.onDeletePress} handleChange={this.onCompletePress
                }/>
                )
            }
            </View>
        );
    }
}

module.exports = PartList;
