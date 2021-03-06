import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class FlexBoxComponent extends Component {

    render() {
        return <View
                style={{
                    flexDirection:'row',
                    backgroundColor:'green',
                    marginTop:20,
                    height:800,
                    justifyContent:'center',
                    alignItems:'stretch',
                    borderWidth:4,
                    borderColor:'red'}}>
            <Text style={{width: 100,fontSize: 20, color: 'black', backgroundColor:'white', flex:1}}>
                第一行 justifyContent:'center' 对齐方式
            </Text>
            <Text style={{width: 100,height:250,fontSize: 20, color: 'blue',backgroundColor:'red',alignSelf:'flex-end',
                marginBottom:100,
                bottom:100,
                left:100,
                padding:20,}}>
                第二行  alignItems 横向排列x是主轴 y是侧轴 竖向排列x是侧轴 y是主轴
            </Text>
            <Text style={{width: 100,height:150,fontSize: 20, color: 'red',backgroundColor:'gray', flex:1}}>
                第三行 flexWrap:'wrap' 设置换行显示元素 默认值 nowrap
            </Text>
        </View>

    }
}