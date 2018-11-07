/**
 * @author itck_mth
 * @time 2018/11/7 09:30
 * @class 组件集成PureComponent之后如果内容不变
 * 将不再重新render
 */

import React, {Component, PureComponent} from 'react';
import {
    View,
    Text,
} from 'react-native';


export default class MyText extends React.PureComponent {

    render() {
        console.log('MyText render')
        return (
            <View style={{alignItems: 'center'}}>
                <Text>{this.props.content}</Text>
            </View>
        );
    }


}