import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {

    return (

        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
      )
}

const styles = {
    viewStyle: {
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      paddingTop: 15
    },
    textStyle: {
        fontSize: 20
    }
  };

export default Header