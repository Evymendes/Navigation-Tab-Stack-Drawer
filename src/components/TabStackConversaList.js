import React, { Component } from 'react';
import { View, Text, Image, Button} from 'react-native';

class TabStackConversaList extends Component {

	static navigationOptions = ({navigation}) => ({
		title:"Conversas",
		tabBarLabel: 'Conversas',
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
				<Button title="Paulo" onPress={()=>this.props.navigation.navigate('TabStackConversaChat', {nome:'Paulo'})} />
				<Button title="José" onPress={() => this.props.navigation.navigate('TabStackConversaChat', {nome:'José'})} />
			</View>
		);
	}
}

export default TabStackConversaList;