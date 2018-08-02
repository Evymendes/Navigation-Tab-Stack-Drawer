import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image  } from 'react-native';


class TelaInicial extends Component {

  static navigationOptions = ({navigation}) => ({
    //title:'Chat'
    tabBarLabel:"Inicial",
    tabBarIcon:({tintColor, focused}) => {
      if(focused) {
        return (
         <Image source={require('../source/assets/home_on.png')} style={{width:26, height:26}} />
        );
    } else {
      return(
        <Image source={require('../source/assets/home_off.png')} style={{width:26, height:26}} />
        );
      }
    }
  });

  constructor(props) {
    super(props);
    this.state = {nome:''}

    this.conversar = this.conversar.bind(this);
  }

  conversar() {

    this.props.navigation.navigate('Conversa', {
        nome:this.state.nome
      });
  }

  render() {
    return (
      <View>
        <Text>Olá Mundo!!!</Text>

        <TextInput style={{width: 200, height:40, borderWidth:1}} placeholder="Qual é o seu nome?" onchangeText={(nome)=>this.setState({nome})} />
        <Button title="StackNavigator Conversar" onPress={this.conversar} />

       
      </View>
    );
  }
}

export default TelaInicial;

//<Button title="StackNavigator Conversar com José" onPress={()=> this.props.navigation.navigate('Conversas', {nome:'José', idade:45})} />