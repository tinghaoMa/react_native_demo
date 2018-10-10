import React, {Component} from 'react';
import {View, Text} from 'react-native';
import RootView from './RootView';
import LifecycleComponent from './LifecycleComponent';
import PropsComponent from './PropsComponent';

export default class EntryComponent extends Component {

    render() {
        let params={name:'小张',age:201,sex:'男'};
        let {name,sex}=params;
        return <View>
            <PropsComponent
                name={name}
                sex={sex}
            />
        </View>
    }


}