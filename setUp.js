/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Student from './Student'
import MingStudent from './MingStudent'
import {name, age, add} from './Test'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class SetUp extends Component {
    constructor(props) {
        super(props);
        this.stu = new Student("zs", '20', '男');
        this.mingStu = new MingStudent();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Text style={{fontSize: 20, color: 'red'}}>{this.stu.toString()}</Text>
                <Text style={{fontSize: 20, color: 'green'}}>{this.mingStu.toString()}</Text>
                <Text style={{fontSize: 20, color: 'blue'}}>{name}</Text>
                <Text style={{fontSize: 20, color: 'blue'}}>{age}</Text>
                <Text style={{fontSize: 20, color: 'blue'}}>{add(3, 4)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
