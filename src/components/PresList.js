import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios'

//const customData = require('../../db.json');

class PresList extends Component {
  componentWillMount() {

    axios.get('https://api.myjson.com/bins/f4vti')
        .then(response => console.log(response))

  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>Presidents</Text>
      </View>
    );
  }
}
const styles = {
  viewStyle: {
    backgroundColor: 'lightgreen'
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   height: 60,
    //   paddingTop: 15
  },
  textStyle: {
    fontSize: 20
  }
};

export default PresList;
