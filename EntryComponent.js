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
import PureComponentTest from './PureComponentTest';
import ImageTest from './ImageTest';

var array = ['a', 'b'];
export default class EntryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.refTest = React.createRef();
    }

    state = {
        size: 0,
        images: array,
    }

    render() {
        return <View style={{flex: 1}}>
            {/*
            <ParentTest image={this.state.images}>

                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>



                <Text key={1} style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
            </ParentTest>

              */}
            <PureComponentTest/>
        </View>
    }

    componentDidMount() {
        array = [1, 2];
        setTimeout(() => {
            this.setState({
                images: array
            });
        }, 3000);


        // this.arrayTest();
        // this.symbolTest();
    }

    arrayTest = () => {
        let arr = [1, 2, 3, 4, 5];
        arr.splice(2, 2, 11, 12);

        console.log(arr);
    }

    symbolTest = () => {
        let s1 = Symbol('foo');
        let s2 = Symbol('bar');
        console.log(s1.toString());
        console.log(s2.toString());


        let a = Symbol();
        let b = Symbol();
        console.log(a === b);

        let key = Symbol('abc');

        let obj = {
            [key]: '111',
            abc: 'mth',
            city: 'beijing',
            age: 10
        }


        let entries = Object.entries(obj);

        for (let [key, value] of entries) {
            console.log(key, value);
        }


        Object.getOwnPropertySymbols(obj).forEach((item) => {
            console.log(obj[item]);
        })

        Reflect.ownKeys(obj).forEach((item) => {
            console.log('reflet =----', item, obj[item]);
        })
    }

}