import React, {Component} from 'react';
import {View, Button, Alert, TouchableOpacity, Image, Text} from 'react-native';

const onButtonPress = () => {
    Alert.alert('点击了Button按钮');
};

export default class ButtonTest extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Button
                    disabled
                    style={{width: 100, height: 100}}
                    title="我是按钮 我不可以点击"
                    onPress={() => {
                        onButtonPress()
                    }}
                    color="#841584">
                </Button>
                <Button
                    style={{width: 100, height: 100}}
                    title="我是按钮 我可以点击"
                    onPress={() => {
                        onButtonPress()
                    }}
                    color="green">
                </Button>

                <TouchableOpacity onPress={onButtonPress} activeOpacity={0.2} focusedOpacity={0.5}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 128,
                        height: 128,
                        backgroundColor: 'red',
                    }}>
                        <Image source={require('./image/ic_launcher.png')}>
                        </Image>
                        <Text style={{color: '#ffffff'}}>ImageButton</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}