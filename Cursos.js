import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Logs } from 'expo'

Logs.enableExpoCliLogging()
const Curso = (props) => {
    console.log(props.nome);
    return (
      <View>
        <Text style={styles.Titulo}>{props.dados.nome}</Text>
        <Image style={styles.Imagens} source={{uri: props.dados.imagen}}/>
        <Text style={styles.corpo}> {props.dados.des}</Text>
        <Text style={styles.DivisorPrimario}></Text>
        <Text style={styles.Divisor2}></Text>
      </View>
    );
  };

  const styles = StyleSheet.create
  ({
      corpo:
      {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
      },

      Titulo:
      {
        fontSize: 30,
        fontStyle: 'oblique',
        textAlign: 'center',
        marginTop: 4,
      },

      Imagens:
      {
        width:350,
        height:250,
        marginLeft:32,
        marginTop:10,
      },

      DivisorPrimario:
      {
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 3,
        marginTop: 30,
        marginStart: 20,
        marginEnd: 20,
      },

      Divisor2:
      {
        borderBottomColor: '#ffaa00',
        borderBottomWidth: 3,
        marginTop: 10,
        marginStart: 60,
        marginEnd: 60,
      },
  })
  
  export default Curso;
  