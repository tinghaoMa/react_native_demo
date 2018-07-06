/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';


export default class ImageTest extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Image
                    style={{width:200, height:200,borderWidth:1}}
                    source={require('./meinv.jpeg')}
                />

                <Image
                    style={{width: 200, height: 200}}
                    source={{uri: 'https://github.com/tinghaoMa/code/blob/png/TCP_UDP.jpeg?raw=true'}}
                />

                <Image source={{uri: 'ic_launcher'}} style={{width: 40, height: 40}} />
            </View>
        );
    }
}