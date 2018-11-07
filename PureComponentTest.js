/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, PureComponent} from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import MyText from './MyText';

export default class PureComponentTest extends React.Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
        this.state = {
            content: 'hello world',
        }
    }

    render() {
        console.log('PureComponentTest render')
        return (
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                    onPress={this.onPress}
                >
                    <Image source={{uri: 'ic_launcher'}} style={{width: 80, height: 80}}/>
                </TouchableOpacity>
                <MyText content={this.state.content}/>
            </View>
        );
    }

    onPress = () => {
        this.setState(
            {
                date: new Date(),
                content: '再次render'
            }
        )
    }
}