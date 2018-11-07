/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import CustomConponent from './custom_component/CustomComponent';

export default class ParentTest extends React.Component {
    constructor(props) {
        super(props);
        console.log('son constructor');
        this.onPress = this.onPress.bind(this);
    }


    render() {
        console.log('son render');
        return (
            <View style={{alignItems: 'center',flex:1}}>
                {this.props.children}

                <Text>this.props.children 一个孩子是对象 没有孩子是undefined，多个孩子是数组</Text>
                <Text>{this.props.image[0]}</Text>
                <Text>{this.props.image[1]}</Text>

                <CustomConponent
                    onPress={this.onPress}
                    titleNormalStyle={
                        {backgroundColor: "orange"}
                    }
                    myText={this.renderMyText()}
                />
            </View>
        );
    }

    onPress = () => {
        console.log('custom onPress');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        console.log(nextProps.image[0]);
        console.log(nextProps.image[1]);
    }

    renderMyText() {
        return <Text>
            哈哈哈哈哈
        </Text>
    }
}