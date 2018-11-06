/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';


export default class DemoTest extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Image source={{uri: 'ic_launcher'}} style={{width: 80, height: 80}}/>
            </View>
        );
    }

    componentDidMount() {
        // this.applyFun();
        // this.callFun();
        // this.bindFun();
        // this.testFun();

        this.takeLongTime().then(v => {
            console.log("got", v);
        });


        this.test();
    }


    takeLongTime() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("long_time_value"), 1000);
        });
    }


    async test() {
        const v = await this.takeLongTime();
        console.log(v);
    }


    applyFun = () => {
        let obj = {
            name: 'hello apply'
        }

        function fun(firstName, lastName) {
            console.log(firstName + '------' + this.name + '------' + lastName);
        }

        fun.apply(obj, ['a', 'b']);

    }

    callFun = () => {
        let obj = {
            name: 'hello call '
        }

        function fun(firstName, lastName) {
            console.log(firstName + '------' + this.name + '------' + lastName);
        }

        fun.call(obj, 'a', 'b');
    }

    bindFun = () => {
        var obj = {
            name: 'linxin'
        }

        function func() {
            console.log(this.name);
        }

        var func1 = func.bind(obj);
        func1();


        func();
    }

    testFun = () => {
        function func(a, b, c) {
            console.log(a, b, c);
        }

        var func1 = func.bind(null, 'linxin');

        func('A', 'B', 'C');            // A B C
        func1('A', 'B', 'C');           // linxin A B
        func1('B', 'C');                // linxin B C
        func.call(null, 'linxin');      // linxin undefined undefined
    }


}