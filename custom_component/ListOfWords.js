/**
 * @author itck_mth
 * @time 2018/11/7 09:45
 * @class describe
 */


import React, {PureComponent} from 'react';
import {
    View,
    Text,
} from 'react-native';


export default class ListOfWords extends React.PureComponent {

    render() {
        console.log('ListOfWords render')
        return (
            <View style={{alignItems: 'center'}}>
                <Text>{this.props.words.join(',')}</Text>
            </View>
        );
    }


}