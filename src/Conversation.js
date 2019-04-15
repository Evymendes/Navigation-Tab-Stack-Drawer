import React, { Component } from 'react';
import { View, Text, Button, TextInput  } from 'react-native';
import { StackNavigator } from 'react-navigation'

class Conversation extends Component {

  static navigationOptions = ({navigation}) => ({
    title:navigation.state.params.nome
    // +" ("+navigation.state.params.idade+" anos)"
    // navigation.state.params.nome
    // title:'José'
  });

  render() {
    return (
      <View>
        <Text>Conversar com José </Text>
        <Text> idade: {this.props.navigation.state.params.idade} anos</Text>
      </View>
      )
  }
}

export default Conversation;