import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

class ConfigDrawer extends Component {

	static navigationOptions = ({navigation}) => ({
		drawerLabel: 'Config',
		drawerIcon: ({tintColor, focused}) => {
			if(focused){
				return (
					<Image source={require('../assets/config_on.png')} style={{width:20, height:20}} />
				);
			} else {
				return (
					<Image source={require('../assets/config_off.png')} style={{width:20, height:20}} />
				);
			}
		}
	})

	render() {
		return (
			<View>
				<Text> Tela de Configuração </Text>
				<Button title="Abrir DrawerNavigation" onPress={() => this.props.navigation.toggleDrawer()} />
			</View>
		)
	}
}

export default ConfigDrawer; 