import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Curso from './Cursos';
import { LinearGradient } from 'expo-linear-gradient';


export default class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      dados:
      [
        {id:'1', nome:'Programação',des:"Aprenda a desenvolver sistemas e projetos com várias linguagens de programação.", imagen:"https://lh3.googleusercontent.com/proxy/-B1MDS1SYW8felJHSh2ZW_Up-h_3ybQHnBujG91BsDpzOQeD-LgZ7pDQiXkgOZqAqluIZOeqRUA"},
        {id:'2', nome:'Administração', des:"Aprenda a gerir projetos e finanças assim como diversas outras áreas de contabilidade.", imagen:"https://uniateneu.edu.br/wp-content/uploads/2020/09/Administracao-min.jpg"},
        {id:'3', nome:'Design digital', des:"Aprenda a desenvolver projetos de layout e organização de imagens com copetencia e proficionalidade.", imagen:"https://id7.com.br/wp-content/uploads/2014/11/design.jpg"},
        {id:'4', nome:'Mecanica', des:"Aprenda tudo sobre mecanica de automoveis, indo desde reparo e manutenção de veiculos a projeto e contrução.", imagen:"https://cpfabbri.com.br/wp-content/uploads/2020/10/shutterstock_727170871-scaled.jpg"},
        {id:'5', nome:'Arquitetura', des:"Aprenda a fazer a orgnização de interiores e a produção de abientes segundo diversas finalidades.", imagen:"https://www.weg.net/tomadas/blog/wp-content/uploads/2017/12/arquitetura-e-urbanismo.jpg"},
        {id:'6', nome:'Jornalismo', des:"Você vai aprender a produzir materias para jornais, TV e mídias digitais, tambem aprendera como lidar com ameaças de morte frequentes.", imagen:"http://www.portalimprensa.com.br/content_file_storage/2019/10/07/jornalismo_certo.jpg"},
        {id:'7', nome:'Letras', des:"Perdão ai Jussimar, mas já to sem ideia de descrição então vai essa mesmo.", imagen:"https://d3q93wnyp4lkf8.cloudfront.net/revista/post_images/4363/f1696b1137216942049f1aa51cb2f40f6dd72070.jpg?1506450790"},
        {id:'8', nome:'Psicologia', des:"Cuida de louco seila.", imagen:"http://vestibular.unimes.br/wp-content/uploads/2017/06/Bacharel-em-psicologia.png"},

      ]
    }
  }

 

  render()
  {
    return (
      <LinearGradient colors={['#2375d9','#96d7ff']}>
      <View>
        <FlatList style={styles.FlatList}
        data={this.state.dados} keyExtractor={(item)=>item.id} renderItem={({item})=><Curso dados={item}/>}
        />
      </View>
      </LinearGradient>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#469cc2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  FlatList: 
  {
    marginTop: 100,
  }
});