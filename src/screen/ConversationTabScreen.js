import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';

class ConversationTabScreen extends Component {

	static navigationOptions = ({navigation}) => ({
		tabBarLabel: 'Conversa',
		tabBarIcon: ({tintColor, focused}) => {
			if(focused){
				return (
					<Image source={require('../assets/chat_on.png')} style={{width:26, height:26}} />
				);
				} else {
					return (
						<Image source={require('../assets/chat_off.png')} style={{width:26, height:26}} />
					);
				}
		}
	});

	render() {
		return (
			<View>
				<Text> Tela de conversa</Text>
			</View>
		);
	}
}

export default ConversationTabScreen;