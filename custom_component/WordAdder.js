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
import Immutable, {List} from 'immutable';


var totalCount = 5;
export default class WordAdder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            words: List(['marklar'])
        };
        this.handleClick = this.handleClick.bind(this);
        this.handle2Click = this.handle2Click.bind(this);
    }

    handleClick() {
        console.log('button click');
        // 这个地方导致了bug 必须使用concat 返回一个新数组 否则ListOfWords不会刷新
        this.setState({words: this.state.words.push('hello')});

        this.test('made')((param1, a) => {
            console.log(param1, a);
            return param1;
        })('hello');

    }

    test = a => next => action => next(action, a);


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

                <Button
                    onPress={this.handle2Click}
                    title="handle2Click"
                    color="#841584"
                />
            </View>
        );
    }

    handle2Click = () => {
        let test = function* getChance(count) {
            while (count > 0) {
                totalCount--;
                yield totalCount;
            }
        }
        let result = test(totalCount);
        let value = result.next();
        console.log(`vlue=${value.value}`);
    }

    componentDidMount() {
        this.immutableTest();
    }

    immutableTest() {
    }
}