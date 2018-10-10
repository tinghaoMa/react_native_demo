import React, {Component} from 'react';
import {View, Text} from 'react-native';
import RootView from './RootView';
import LifecycleComponent from './LifecycleComponent';
import PropsComponent from './PropsComponent';

export default class EntryComponent extends Component {

    render() {
        return <View>
            <PropsComponent
                name='小明'
                sex='man'
            />
        </View>
    }


}