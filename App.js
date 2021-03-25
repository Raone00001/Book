import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import BookTransactionScreen from './screens/bookT';
import SearchScreen from './screens/searchS';

export default class App extends React.Component {
  render(){

    return (

      <AppContainer/>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({

  Transaction:{screens: BookTransactionScreen},
  Search:{screens: SearchScreen}

})

const AppContainer = createAppContainer(TabNavigator);