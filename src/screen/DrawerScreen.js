import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class DrawerScreen extends Component {

	static navigationOptions = ({navigation}) => ({
		drawerLabel: 'Home',
		drawerIcon: ({tintColor, focused}) => {
			
		}
	});

	constructor(props){
		super(props);
		this.state = {
			nome: ''
		}

		this.conversar = this.conversar.bind(this);
	}

	conversar() {
		this.props.navigation.navigate('Conversa',	{
			nome: this.state.nome
		});
	}

	//ação de clique do botão conversar2 (o que vai fazer quando clicar no botão)

	render() {
		return (
			<View>
				<Text> Hello Word!!! </Text>

				<TextInput style={{height:40, borderWidth:1, borderColor:'#000', width:200}} 
					placeholder="Pesquisar nome" onChangeText={(nome) => this.setState({nome})} 
				/>
				<Button title="Abrir DrawerNavigation" onPress={() => this.props.navigation.toggleDrawer()} />
			</View>
		);
	}
}

export default DrawerScreen;