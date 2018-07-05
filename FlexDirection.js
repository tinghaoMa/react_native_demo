/**
 *
 * 父视图属性(容器属性)：
 *
 *    flexDirection   row  column(默认)  row-reverse  column-reverse
 *
 *    flexWrap: wrap nowrap(默认)
 *
 *    justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')
 *
 *    alignItems enum('flex-start', 'flex-end', 'center', 'stretch')
 *
 */
import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';


export default class FlexDirection extends Component {

    render() {
        return (
            <View style={{
                flexDirection:'row',
                backgroundColor: "darkgray",
                height:500,
                marginTop: 20,
                justifyContent:'flex-end',
                alignItems:'stretch'
            }}>
                <View style={{width: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{fontSize: 16}}>1</Text>
                </View>
                <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{fontSize: 16}}>2</Text>
                </View>
                <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{fontSize: 16}}>3</Text>
                </View>
                <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{fontSize: 16}}>4</Text>
                </View>
                <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{fontSize: 16}}>5</Text>
                </View>
            </View>
        );
    }
}

