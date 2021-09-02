import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Curso from './Cursos';


export default class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      dados:
      [
        {id:'1', nome:'Desenvolvimento de Sistemas', 
        des:"Aprenda a desenvolver sistemas e projetos com várias linguagens de programação.", imagen:"DS.js"},
        {/*{id:'2', nome:'Administração', des:"Programar top", imagen:"generica"},
        {id:'3', nome:'Design digital', des:"Programar top", imagen:"generica"},
      {id:'4', nome:'Mecanica', des:"Programar top", imagen:"generica"}*/}
      ]
    }
  }

 

  render()
  {
    return (
      <View style={styles.container}>
        <FlatList style={styles.FlatList}
        data={this.state.dados} keyExtractor={(item)=>item.id} renderItem={({item})=><Curso dados={item}/>}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80a2d9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  FlatList: 
  {
    marginTop: 100,
  }
});