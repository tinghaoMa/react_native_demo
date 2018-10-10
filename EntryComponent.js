import React, {Component} from 'react';
import {View, Text} from 'react-native';
import RootView from './RootView';
import LifecycleComponent from './LifecycleComponent';
import PropsComponent from './PropsComponent';
import StateComponent from './StateComponent';
import RefComponent from './RefComponent';

export default class EntryComponent extends Component {
    constructor(props){
        super(props);
        this.refTest= React.createRef();
    }

    state={
        size:0,
    }

    render() {
        return <View>
            <Text
                style={{fontSize:40, color:'red'}}
                onPress={()=>{
                    let size = this.refTest.getSize();
                    this.setState({
                        size:size
                    })
                }}>
                点击获取ref大小 size={this.state.size}
            </Text>
            <RefComponent
                ref={ref => this.refTest = ref}
            />
        </View>
    }


}