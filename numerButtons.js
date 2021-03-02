import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Plataform,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class NumberButton extends Component {
  render() {
      const {value, handleOnPress} = this.props;
    return (
        <TouchableOpacity style={styles.container} onPress={()=> handleOnPress(value)}>
            <Text style={styles.text}>{value} </Text>

        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 1,
      backgroundColor: '#ea97ad',
      justifyContent: 'center',
      alignItems: 'center'

    },
    text: {
        color: '#f3f2da',
        fontSize: 26
    }

  });
