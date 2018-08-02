import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import TabStackConversaList from '../components/TabStackConversaList'
import TabStackConversaChat from '../components/TabStackConversaChat'

const Navegador = StackNavigator({
	TabStackConversaList: {
		screen: TabStackConversaList
	},
	TabStackConversaChat: {
		screen: TabStackConversaChat
	}
},
	{ tabBarOptions: {
		 showIcon:true 
		} 
	}
);

export default Navegador;