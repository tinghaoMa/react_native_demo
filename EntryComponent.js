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
import ParentTest from './ParentTest';
import ImageTest from './ImageTest';

export default class EntryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.refTest = React.createRef();
        console.log('parent constructor');
    }

    state = {
        size: 0,
        name:'我是父组件向子组件传递的参数',
    }

    render() {
        console.log('parent render');
        return <View>
            <ParentTest name={this.state.name}>
              {/*
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>


              */}

                <Text key={1} style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
            </ParentTest>
        </View>
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: '哈哈哈哈哈哈哈哈'
            });
        }, 3000);
    }


}