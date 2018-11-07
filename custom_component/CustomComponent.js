/**
 * @author itck_mth
 * @time 2018/11/7 08:27
 * @class describe
 *
 * https://github.com/Kennytian/learning-react-native/blob/master/advanced/custom-components.md
 */

import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
}
    from 'react-native';
import PropTypes from 'prop-types';

export default class CustomComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {
        onPress: PropTypes.func.isRequired,
        titleNormalStyle: PropTypes.object,
        myText:PropTypes.element,
    }

    render() {
        return (
            <View style={[styles.container, this.props.titleNormalStyle]}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                >
                    <Text style={styles.text}>press me</Text>
                </TouchableOpacity>
                {this.props.myText}
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex:1
    },
    text: {
        fontSize: 18,
        color: 'red',
        fontWeight: '500'
    }
});