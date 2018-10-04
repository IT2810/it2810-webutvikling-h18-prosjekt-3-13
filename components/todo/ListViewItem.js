import React from 'react';
import { TouchableHighlight, View, Text} from 'react-native';
import CheckBox from './CheckBox';

export default class ListViewItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            data: props.data
        });
    }

    onCheckBoxPressed = () => {
        let data = this.state.data;
        data.completed = !data.completed
        this.setState({
            data: data
        });

        this.props.onCompletedChange(data, this.props.dataIndex);
    };

    render() {
        let data = this.state.data;
        let color = data.completed ? '#C5C8FF' : '#000';
        let textDecorationLine = data.completed ? 'line-through' : 'none';
        return (
            <TouchableHighlight underlayColor={'#eee'} style={{paddingTop: 10, paddingBottom: 10, backgroundColor: "#F8F8F8", borderBottomWidth: 1, borderColor: '#eee'}} {...this.props.sortHandlers}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{marginRight: 'auto', fontSize:18, color: color, textDecorationLine: textDecorationLine}}>{data.task}</Text>
                    <CheckBox data={data} color={color} onCheckBoxPressed={this.onCheckBoxPressed} style={{marginLeft: 'auto'}}/>
                </View>
            </TouchableHighlight>
        )
    }
}

