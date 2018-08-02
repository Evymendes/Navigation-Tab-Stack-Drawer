import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';

class TabStackDrawerConfigProfile extends Component {

	static navigationOptions = ({navigation}) => ({
		drawerLabel: 'Config do Profile',

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
				<Text> Tela de Configuração do perfil</Text>
				<Button title="Abrir DrawerNavigation" onPress={() => this.props.navigation.toggleDrawer()} />
			</View>
		)
	}
}

export default TabStackDrawerConfigProfile; 