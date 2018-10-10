import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class StateComponent extends Component {

    // state={
    //     color:'blue',
    //     size:40
    // }

    constructor(props){
        super(props);
        this.state={
            color:'red',
            size:80,
        }
    }

    render() {
        return <View>
            <Text style={{fontSize: this.state.size, color: this.state.color}}>
                State初始化练习
            </Text>
        </View>

    }
}