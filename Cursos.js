import React, {Component} from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import { Logs } from 'expo'

Logs.enableExpoCliLogging()
const Curso = (props) => {
    console.log(props.nome);
    return (
      <View>
        <Text>nome: {props.nome}</Text>
        {/*<Text>nome: {this.props.dados.nome}</Text> */}
      </View>
    );
  };
  
  export default Curso;
  