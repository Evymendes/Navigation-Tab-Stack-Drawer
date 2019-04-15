//Stack + Tab na parte de conversa

import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import { Image} from 'react-native';

import TabInicialScreen from './src/screen/TabInicialScreen'
import TabStackConversaScreen from './src/screen/TabStackConversaScreen'
import TabStackDrawerConfigScreen from './src/screen/TabStackDrawerConfigScreen'

const Navegador = TabNavigator({
	Home: {
		screen: TabInicialScreen
	},
	// Conversa: {
	// 	screen: TabStackConversaScreen
	// },
	Conversa: {
    screen:TabStackConversaScreen,
    navigationOptions: {
		  title:"Conversas",
		  tabBarLabel:"Conversas",
		  tabBarIcon:({tintColor, focused}) => {
			if(focused) {
			  return (
				<Image source={require('./src/assets/chat_on.png')} style={{width:20, height:20}} />
			   );
			} else {
			   return (
				<Image source={require('./src/assets/chat_off.png')} style={{width:20, height:20}} />
			   );
			}					
		    }
               }    
	    },
	Config: {
		screen: TabStackDrawerConfigScreen
	},
},

	{ tabBarOptions: {
		 showIcon:true 
		} 
	}
);

export default Navegador;


//Drawer
// import React, { Component } from 'react';
// import { DrawerNavigator } from 'react-navigation';

// import DrawerScreen from './src/screen/DrawerScreen'
// import DrawerHomeNavigation from './src/screen/DrawerHomeNavigation'
// import DrawerConversationScreen from './src/screen/DrawerConversationScreen'
// import ConfigDrawer from './src/components/ConfigDrawer'

// const Navegador = DrawerNavigator({
// 	Drawer: {
// 		screen: DrawerScreen
// 	},
// 	Home: {
// 		screen: DrawerHomeNavigation
// 	},
// 	Conversa: {
// 		screen: DrawerConversationScreen
// 	},
// 	Config: {
// 		screen: ConfigDrawer
// 	}
// },
// 	{ tabBarOptions: {
// 		 showIcon:true 
// 		} 
// 	}
// );

// export default Navegador;



//Tab

// import React, { Component } from 'react';
// import { TabNavigator } from 'react-navigation';

// import TabInicialScreen from './src/screen/TabInicialScreen'
// import ConversationTabScreen from './src/screen/ConversationTabScreen'
// import ConfigTabScreen from './src/screen/ConfigTabScreen'

// const Navegador = TabNavigator({
// 	Home: {
// 		screen: TabInicialScreen
// 	},
// 	Conversa: {
// 		screen: ConversationTabScreen
// 	},
// 	Config: {
// 		screen: ConfigTabScreen
// 	}
// },
// 	{ tabBarOptions: {
// 		 showIcon:true 
// 		} 
// 	}
// );

// export default Navegador;



//Stack

// import React, { Component } from 'react';
// import { StackNavigator } from 'react-navigation';

// import StackNavigation from './src/components/StackNavigation'
// import ConversationStackScreen from './src/screen/ConversationStackScreen'

// const Navegador = StackNavigator({
// 	Home: {
// 		screen: StackNavigation
// 	},
// 	Conversa: {
// 		screen: ConversationStackScreen
// 	}
// });

// export default Navegador;






// Conversa: { nome da tela
 //   screen:Conversa   nome do componente nome do componente

// import React, { Component } from 'react';
// import { DrawerNavigator } from 'react-navigation'


// import TelaInicial from './src/TelaInicial';
// import ConversationScreen from './src/ConversationScreen';
// import Conversation from './src/Conversation';
// import ConfigScreen from './src/ConfigScreen';


// const Navegador = DrawerNavigator({
//   Home: {
//     screen:TelaInicial
//   },
//   Conversa: {
//     screen:ConversationScreen
//   },
//   Config: {
//     screen: ConfigScreen
//   },
// },

// { tabBarOptions: { showIcon:true } }
// );

// export default Navegador;
