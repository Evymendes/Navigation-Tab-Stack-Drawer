import React, { Component } from 'react';
import { View, Text, Button, TextInput, Image  } from 'react-native';

class ConversationScreen extends Component {

  static navigationOptions = ({navigation}) => ({
    tabBarLabel: "Conversa",
    tabBarIcon:({tintColor, foused}) => {
      if(foused) {
        return (
          <image source={require('../source/assets/chat_on.png')} style={{width:26, height:26}} />
          );
      } else {
        return (
          <Image source={require('../source/assets/chat_on.png')} style={{width:26, height:26}} />
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
        <Text>Tela de conversa</Text>
      </View>
      )
  }
}

export default ConversationScreen;
