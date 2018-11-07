/**
 * @author itck_mth
 * @time 2018/11/7 09:45
 * @class describe
 */


import React, {Component, PureComponent} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import ListOfWords from './ListOfWords';
import Immutable from 'immutable';

export default class WordAdder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar']
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('button click');
        // 这个地方导致了bug 必须使用concat 返回一个新数组 否则ListOfWords不会刷新
        const preWords = this.state.words;
        preWords.push('hello world');
        this.setState({words: Immutable.Map(preWords)});
    }

    render() {
        return (
            <View>
                <Button
                    onPress={this.handleClick}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <ListOfWords words={this.state.words}/>
            </View>
        );
    }

    componentDidMount() {
        this.immutableTest();
    }

    immutableTest() {
    }
}