import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';


export default class PropsComponent extends Component {
    static defaultProps={
        age:1111,
    }

    static propTypes={
        name:PropTypes.string,
        sex:PropTypes.string.isRequired,
        age:PropTypes.number,
    }

    constructor(props) {
        super(props);
    };

    render() {
        return <View>
            <Text style={{fontSize: 20, color: 'green'}}>
                传递属性 name = {this.props.name}
            </Text>
            <Text style={{fontSize: 20, color: 'blue'}}>
                默认属性 age = {this.props.age}
            </Text>
            <Text style={{fontSize: 20, color: 'red'}}>
                必须传的属性 sex = {this.props.sex}
            </Text>
        </View>

    }
}