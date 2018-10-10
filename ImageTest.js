/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';


export default class ImageTest extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{alignItems:'center'}}>
                <Image
                    onLoadStart={()=>{
                        console.log('-------onLoadStart-------');
                    }}

                    onLoadEnd={()=>{
                        console.log('-------onLoadEnd-------');
                    }}

                    style={{width:200, height:200,borderWidth:4,borderRadius:10}}
                    source={require('./meinv.jpeg')}
                />

                <Image
                    style={{width: 200, height: 200}}
                    source={{uri: 'https://github.com/tinghaoMa/code/blob/png/TCP_UDP.jpeg?raw=true'}}
                />

                <Image source={{uri: 'ic_launcher'}} style={{width: 80, height: 80}} />
            </View>
        );
    }
}