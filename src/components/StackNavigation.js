import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

class StackNavigation extends Component {

	static navigationOptions = ({navigation}) => ({
		title: 'Bem Vindo'
	});

	constructor(props){
		super(props);
		this.state = {
			nome: '',
			idade: '24'
		}
		// adiciona a ação conversar no state
		this.conversar = this.conversar.bind(this);
	}

	//ação de clique do botão conversar2 (o que vai fazer quando clicar no botão)

	conversar() {
		this.props.navigation.navigate('Conversa',	{
			nome: this.state.nome
		});
	}

	render() {
		return (
			<View>
				<Text> Hello Word!!! </Text>

				<Button style={{margin:30, width:100}} title="Conversar com José"
					onPress={()=> this.props.navigation.navigate('Conversa', {nome:'José', idade:24})}
				/>

				<TextInput style={{height:40, borderWidth:1, borderColor:'#000', width:200}} 
					placeholder="Pesquisar nome" onChangeText={(nome) => this.setState({nome})} 
				/>
				<Button title={"Conversar 2"}
					onPress={this.conversar}
				/>
			</View>
		);
	}
}

export default StackNavigation;