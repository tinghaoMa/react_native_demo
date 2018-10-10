import React, {Component} from 'react';
import {View, Button, Alert, TouchableOpacity, Image, Text} from 'react-native';


export default class PropsComponent extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        console.log('------render------');
        return <View>
            <Text style={{fontSize: 20, color: 'green'}}
            >属性练习{this.props.name}</Text>
        </View>

    }
}