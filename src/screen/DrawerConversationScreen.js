import React, { Component } from 'react';
import { View, Text, Image, Button} from 'react-native';

class DrawerConversationScreen extends Component {

	static navigationOptions = ({navigation}) => ({
		drawerLabel: 'Conversa',
		drawerIcon: ({tintColor, focused}) => {
			if(focused){
				return (
					<Image source={require('../assets/chat_on.png')} style={{width:20, height:20}} />
				);
				} else {
					return (
						<Image source={require('../assets/chat_off.png')} style={{width:20, height:20}} />
					);
				}
		}
	});

	render() {
		return (
			<View>
				<Text> Tela de conversa</Text>
				<Button title="Abrir DrawerNavigation" onPress={() => this.props.navigation.toggleDrawer()} />
			</View>
		);
	}
}

export default DrawerConversationScreen;