import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class RefComponent extends Component {

    state={
        size:40
    }

    getSize(){
        return this.state.size;
    }

    render() {
        return <View>
            <Text
                style={{fontSize: this.state.size, color:'red'}}>
                ref获取组件的实例 调用组件的方法
            </Text>
        </View>
    }
}