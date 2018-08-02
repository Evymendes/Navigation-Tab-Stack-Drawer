import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import TabStackDrawerConfigApp from '../components/TabStackDrawerConfigApp'
import TabStackDrawerConfigProfile from '../components/TabStackDrawerConfigProfile'

const Navegador = DrawerNavigator({
	TabStackDrawerConfigApp: {
		screen: TabStackDrawerConfigApp
	},
	TabStackDrawerConfigProfile: {
		screen: TabStackDrawerConfigProfile
	}
},
	{ tabBarOptions: {
		 showIcon:true 
		} 
	}
);

export default Navegador;