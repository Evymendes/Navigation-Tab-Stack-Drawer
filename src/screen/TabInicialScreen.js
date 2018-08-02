import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

class TabInicialScreen extends Component {

	static navigationOptions = ({navigation}) => ({
		tabBarLabel: 'Inicial',
		tabBarIcon: ({tintColor, focused}) => {
			if(focused){
				return (
					<Image source={require('../assets/home_on.png')} style={{width:26, height:26}} />
				);				
			} else {
				return (
					<Image source={require('../assets/home_off.png')} style={{width:26, height:26}} />
				);
			}
		}
	});

	constructor(props){
		super(props);
		this.state = {
			nome: '',
			idade: '24'
		}
	}

	//ação de clique do botão conversar2 (o que vai fazer quando clicar no botão)

	render() {
		return (
			<View>
				<Text> Hello Word!!! </Text>

				<TextInput style={{height:40, borderWidth:1, borderColor:'#000', width:200}} 
					placeholder="Pesquisar nome" onChangeText={(nome) => this.setState({nome})} 
				/>
			</View>
		);
	}
}

export default TabInicialScreen;