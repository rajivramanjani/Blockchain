import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import RootStack from './stack/RootStack'

export default class App extends React.Component{
  render(){
    return(
      <RootStack />
    )
  }
}