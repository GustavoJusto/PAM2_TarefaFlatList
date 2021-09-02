import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Logs } from 'expo'

Logs.enableExpoCliLogging()
const Curso = (props) => {
    console.log(props.nome);
    return (
      <View>
        <Text style={styles.Titulo}>{props.dados.nome}</Text>
        <Image style={styles.Imagens} source={require(`./imagens/${props.dados.imagem}`)}/>
        <Text style={styles.corpo}> {props.dados.des}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create
  ({
      corpo:
      {
        fontSize: 20,
        textAlign: 'center',
      },

      Titulo:
      {
        fontSize: 25,
        textAlign: 'center',
      },

      Imagens:
      {
        width:350,
        height:250,
        marginLeft:32,
        marginTop:10,
      }
  })
  
  export default Curso;
  