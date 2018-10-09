import React, {Component} from 'react';
import {View, Button, Alert, TouchableOpacity, Image, Text} from 'react-native';


export default class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        console.log('------constructor------');
    }

    componentWillMount(){
        console.log('------componentWillMount------');
    }

    componentDidMount(){
        console.log('------componentDidMount------');
    }

    componentWillReceiveProps(nextProps){
        console.log('------componentWillReceiveProps------');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('------shouldComponentUpdate------');
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log('------componentWillUpdate------');

    }

    componentDidUpdate(prevProps,prevState){
        console.log('------componentDidUpdate------');
    }

    componentWillUnmount(){
        console.log('------componentWillUnmount------');
    }

    render() {
        console.log('------render------');
        return (
            <Text style={{fontSize: 20, color: 'red'}}>hello world</Text>
        );
    }
}