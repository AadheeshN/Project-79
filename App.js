import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppTabNavigator } from './components/AppTabNavigator';


export default function App() {
  return (
<AppContainer />
  );
}

const switchNavigator = createSwitchNavigator({
  LoginScreen: {screen: LoginScreen},
  AppTabNavigator: AppTabNavigator
  
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "HomeScreen"){
        return(
          <Image
          source={require("./assets/house.png")}
          style={{width:20, height:20}}
        />
        )

      }
      else if(routeName === "ExchangeScreen"){
        return(
          <Image
          source={require("./assets/exchange.png")}
          style={{width:20, height:20,}}
        />)

      }
    }
  })
}
) 

const AppContainer = createAppContainer(switchNavigator);