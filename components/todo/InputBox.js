import React from 'react'
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TodoModel from './TodoModel';
import Funtions from './TodoFunctions';

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
        let title = event.nativeEvent.text; // Kan hende det må være var
        let dataList = this.props.data.filter((item) => item.task.match(new RegExp('.*' + title +'.*', 'gi')));

        this.setState({
            newValue: title
        });
        this.props.updateDataList(dataList);
    }

    submitTask = () => {
        if (this.state.newValue) {
            let newDataItem = new TodoModel(this.state.newValue);
            let dataList = this.props.data;
            let dataItem = Funtions.searchForTodoItem(newDataItem, dataList);
            if (dataItem) {
                Funtions.move(dataList, (dataList.indexOf(dataItem)), 0); // Flytt elementet vi fant først

                this.setValue({
                    newValue: ''
                });
                this.props.updateDataList(dataList);
                return;
            }

            dataList.unshift(newDataItem);

            this.setState({
                newValue: ''
            });
            this.props.updateDataList(dataList);
        }
    }


    render() {
        let iconName = this.state.newValue === '' ? '' : 'add';
        let iconWidth = this.state.newValue === '' ? {width: 0} : {width: 55 , marginTop: -4} ;
        return (
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <TextInput style={{flex: 6, height: 36, padding: 4, marginBottom: 0, marginTop: 13, fontSize: 16, borderWidth: 1, borderColor: '#eee', borderRadius: 8, backgroundColor: '#fff'}}
               placeholder='Add a todo or Search'
               onSubmitEditing={this.submitTask}
               blurOnSubmit={false}
               value={this.state.newValue}
               onChange={this.onChange}
               >
            </TextInput>
                <Icon.Button
                    style={iconWidth}
                    name={iconName}
                    onPress={this.submitTask}
                    backgroundColor ='rgba(0,0,20,0)'
                    color={'blue'}
                    size={35}
                    iconStyle={{marginLeft: 0, marginRight: 10}}
                    activeOpacity={1}
                    borderRadius={5}
                />
            </View>
        )
    }
}

module.exports = InputBox;