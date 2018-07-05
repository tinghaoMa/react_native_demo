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
 * 子视图属性
 *
 *  alignSelf enum(‘auto’, ‘flex-start’, ‘flex-end’, ‘center’, ‘stretch’)
 *  flex number 0(默认)
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
                flexDirection: 'column',
                backgroundColor: "darkgray",
                height: 500,
                marginTop: 20,
                borderWidth: 2,
                borderColor: 'red'
            }}>
                <View style={{width: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{fontSize: 16}}>1</Text>
                </View>
                <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                    <Text style={{fontSize: 16}}>2</Text>
                </View>
                <View style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "darkcyan",
                    margin: 50,
                    paddingRight: 10,
                    paddingLeft: 5,
                    paddingTop:30
                }}>
                    <View style={{flex: 1, backgroundColor: 'red'}}></View>
                </View>
                <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5, flex: 1}}>
                    <Text style={{fontSize: 16}}>4</Text>
                </View>
                <View style={{width: 40, height: 40, backgroundColor: "darkcyan", margin: 5, flex: 2,left:100}}>
                    <Text style={{fontSize: 16}}>5</Text>
                </View>
            </View>
        );
    }
}

