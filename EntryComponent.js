import React, {Component} from 'react';
import {View, Text} from 'react-native';
import RootView from './RootView';
import LifecycleComponent from './LifecycleComponent';
import PropsComponent from './PropsComponent';
import StateComponent from './StateComponent';
import RefComponent from './RefComponent';
import FlexBoxComponent from './FlexBoxComponent';
import TouchableTest from './TouchableTest';
import DemoTest from './DemoTest';
import ImageTest from './ImageTest';

export default class EntryComponent extends React.Component {
    constructor(props){
        super(props);
        this.refTest= React.createRef();
    }

    state={
        size:0,
    }

    render() {
        return <View>
            <DemoTest/>
        </View>
    }


}