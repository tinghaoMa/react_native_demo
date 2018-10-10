import React, {Component} from 'react';
import {View, Text} from 'react-native';
import RootView from './RootView';
import LifecycleComponent from './LifecycleComponent';
import PropsComponent from './PropsComponent';
import StateComponent from './StateComponent';

export default class EntryComponent extends Component {

    render() {
        return <View>
            <StateComponent/>
        </View>
    }


}