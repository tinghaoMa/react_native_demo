import React, {Component} from 'react';
import {View, Button, Alert, TouchableOpacity, Image, Text} from 'react-native';


export default class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        console.log('------constructor------');
        this.state={
            count:0,
        }
    };


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
        return <View>

            <Text style={{fontSize: 20, color: 'red'}}
                  onPress={()=>{
                     this.setState({
                         count:this.state.count+1,
                     })
                  }}
            >有本事你打我呀</Text>

            <Text style={{fontSize: 20, color: 'green'}}
            >你被打了{this.state.count}次</Text>
        </View>

    }
}