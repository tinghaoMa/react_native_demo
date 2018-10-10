import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class PropsComponent extends Component {
    static defaultProps={
        age:10,
    }

    constructor(props) {
        super(props);
    };

    render() {
        console.log('------render------');
        return <View>
            <Text style={{fontSize: 20, color: 'green'}}>
                传递属性 name = {this.props.name}
            </Text>
            <Text style={{fontSize: 20, color: 'green'}}>
                默认属性 age = {this.props.age}
            </Text>
        </View>

    }
}