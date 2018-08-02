import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image  } from 'react-native';

class ConfigScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    tabBarLabel: "Config.",
    tabBarIcon:({tintColor, foused}) => {
      if(foused) {
        return (
          <image source={require('../src/assets/chat_on.png')} style={{width:26, height:26}} />
          );
      } else {
        return (
          <Image source={require('../src/assets/chat_on.png')} style={{width:26, height:26}} />
        );
      }
    }
    // title:"Conversa"
    //+" ("+navigation.state.params.idade+" anos)"
    //navigation.state.params.nome
    // title:'José'
  });

  render() {
    return (
      <View>
        <Text>Tela de configurações</Text>
      </View>
      )
  }
}

export default ConfigScreen;
