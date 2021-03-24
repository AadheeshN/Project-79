import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExchangeScreen from '../screens/ExchangeItems';

export const AppTabNavigator = createBottomTabNavigator({
    HomeScreen : {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: <Image source = {require('../assets/house.png')}  style = {{ width: 20, height: 20 }}/>, 
            tabBarLabel: 'Home'
        } 
    },

    ExchangeItems : {
        screen: ExchangeScreen,
        navigationOptions: {
            tabBarIcon: <Image source = {require('../assets/exchange.png')}  style = {{ width: 20, height: 20 }}/>, 
            tabBarLabel: 'Exchange'
        } 
    },

})