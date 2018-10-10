import React, {Component} from 'react';
import {View, Text,Image} from 'react-native';


export default class StateComponent extends Component {

    // state={
    //     color:'blue',
    //     size:40
    // }

    constructor(props){
        super(props);
        this.state={
            color:'red',
            size:40,
        }
    }

    render() {
        return <View>
            <Text
                style={{fontSize: 20, color: this.state.color}}
                onPress={()=>{
                    this.setState({
                        size:this.state.size+20
                    })
                }}>
                点击变大
            </Text>
            <Text
                style={{fontSize: 20, color: this.state.color}}
                onPress={()=>{
                    this.setState({
                        size:this.state.size-20
                    })
                }}>
                点击变小
            </Text>

            <Image
                style={{width:this.state.size,height:this.state.size}}
                source={require('./meinv.jpeg')}
            />

        </View>
    }
}