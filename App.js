import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import PresList from './src/components/PresList'

export default class App extends React.Component {
  render() {
    return (
      
      <View style={{ flex: 1}}>
        
        <Header headerText={'PresiDEX'} />

        <PresList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

