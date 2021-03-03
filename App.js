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
  ['CE', 'DeL', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', ',', '=']
];

export default class App extends Component {
  constructor(){
    super()
    this.initialState = {
      displayValue: '0',
      operator: null,
      firtsValue: '',
      secondValue: '',
      nextValue: false
    }
    this.state = this.initialState;
  }
  renderButtons() {
    let layouts = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
          return <NumberButton
              value={buttonItems}
              handleOnPress={this.handleInput.bind(this, buttonItems)}
              key={'btn-' + buttonIndex} />
      });

      return <View style={styles.inputRow} 
                  key={'row-' + index}>
                    {rowItem}
              </View>
    });
    return layouts
  }

  handleInput = (input) => {
    const { displayValue, operator, firtsValue, secondValue, nextValue } = this.state;
    switch (input) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':  
        case '9':
          this.setState({
            displayValue: (displayValue === '0') ? input : displayValue + input
      
          })
          if (!nextValue) {
              this.setState({
                  firtsValue: firtsValue + input
              })
          } else {
            this.setState({
              secondValue: secondValue + input
          })
          }
          break;
        case '+':
        case '-':
        case '*':
        case '/':
          this.setState({
            nextValue: true,
            operator: input,
            displayValue: (operator !== null ? displayValue.substr(0, displayValue.length -1) : displayValue) + input
          })
          break;

        case ',':
          let lst = displayValue.slice(-1) // toma el ultimo caracter
          this.setState({
            displayValue: lst !== ',' ? displayValue + input : displayValue
          })
          if (!nextValue) {
            this.setState({
                firtsValue: firtsValue + input
            })
          } else {
           this.setState({
             secondValue: secondValue + input
          })
          }
          break;
        
        case 'CE':
          this.setState(this.initialState);
          break;

        case 'DeL':
          let string = displayValue.toString();
          let deleteString = string.substr(0, string.length - 1);
          let length = string-length;
          this.setState({
            displayValue: length == 1 ? '0' : deleteString,
            firtsValue: length == 1 ? '' : deleteString
          })
          break;
        case '=':
          let resultado = eval(firtsValue + operator + secondValue)
          this.setState({
            
            displayValue: resultado % 1 === 0 ? resultado : resultado.toFixed(2),
            firtsValue: resultado % 1 === 0 ? resultado : resultado.toFixed(2),
            secondValue: '',
            operator: null,
            nextValue: false
          })
          break;
    }
    
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resulText}>
            {this.state.displayValue}
          </Text>

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
