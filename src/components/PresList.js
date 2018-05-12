import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios'
import PresDetail from './PresDetail'

//const customData = require('../../db.json');

class PresList extends Component {
state = { people: [] }

  componentWillMount() {

    axios.get('https://api.myjson.com/bins/1aks9y')
        .then(response => this.setState( { people: response.data} ))
  }

renderPeople() {
    return this.state.people.map(person => <PresDetail key={person.number} person={person}/>)
}

  render() {

    console.log("state", this.state)

    return (
      <View style={styles.viewStyle}>
        {this.renderPeople()}
      </View>
    );
  }
}
const styles = {
  viewStyle: {
    backgroundColor: 'white'
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
