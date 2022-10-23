import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.cronometro} source={require('./assets/cronometro.png')} resizeMode='cover'>
          <Text style={styles.contador}>0.0</Text> 
        </ImageBackground>

        <View style={styles.areabotoes}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textodobotao}>Começar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textodobotao}>Zerar</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.arearegistro}>
          <Text style={styles.registro}> Último tempo: </Text>
        </View> 
        
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00aeef'
  },
  cronometro:{
    flex:1,
    marginTop:100,
    height:350,
    width:350,
    alignItems:'center',
  },
  contador:{
    fontSize:50,
    marginTop:170,
  },
  areabotoes:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    marginTop:95,
  },
  botao:{
    flex:1,
    width:145,
    height:100,
    backgroundColor:'#fff',
    margin:10,
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
  },
  textodobotao:{
    fontSize:20,
  },
  registro:{
    marginEnd:95,
    marginTop:-150,
    fontSize:23,
  },
});
