/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Plataform
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NumberButton from './numerButtons';

const buttons = [
  ['CLEAN', 'DeL', '/'],
  [7, 8, 9, '*'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, ',', '=']
];

export default class App extends Component {
  renderButtons() {
    let layouts = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
          return <NumberButton
              value={buttonItems}
              handleOnPress={()=>{}}
              key={'btn-' + buttonIndex} />
      });

      return <View style={styles.inputRow} 
                  key={'row-' + index}>
                    {rowItem}
              </View>
    });
    return layouts
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resulText}>0</Text>

        </View>
        <View style={styles.inputContainer}>
          {this.renderButtons()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#4e8d7c'
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#045762'
  },
  resulText: {
    color: '#f3f2da',
    fontSize: 80,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right'
  },
  inputRow: {
    flex: 1, 
    flexDirection: 'row'
  }
});

//export default App;
