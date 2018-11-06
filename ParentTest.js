/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';


export default class ParentTest extends React.Component {
    constructor(props) {
        super(props);
        console.log('son constructor');
        console.log(this.props.children.length);
        console.log(this.props.name);
    }


    render() {
        console.log('son render');
        return (
            <View style={{alignItems: 'center'}}>
                {this.props.children}

                <Text>this.props.children 一个孩子是对象 没有孩子是undefined，多个孩子是数组</Text>
                <Text>{this.props.name}</Text>
            </View>
        );
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        console.log(nextProps.name);
    }

}