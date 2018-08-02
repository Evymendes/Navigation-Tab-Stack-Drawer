import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class ConfigTabScreen extends Component {

	static navigationOptions = ({navigation}) => ({
		tabBarLabel: 'Config',
		tabBarIcon: ({tintColor, focused}) => {
			if(focused){
				return (
					<Image source={require('../assets/config_on.png')} style={{width:26, height:26}} />
				);
			} else {
				return (
					<Image source={require('../assets/config_off.png')} style={{width:26, height:26}} />
				);
			}
		}
	});

	render() {
		return (
			<View>
				<Text> Tela de Configuração </Text>
			</View>
		)
	}
}

export default ConfigTabScreen; 