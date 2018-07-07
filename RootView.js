import React, {Component} from 'react';
import {View} from 'react-native';
import ButtonTest from "./ButtonTest";


export default class RootView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <ButtonTest/>
            </View>
        );
    }
}