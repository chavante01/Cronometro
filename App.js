import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero:0,
      botaocomecar:'Começar',
      ultimo: null,
    };
    this.timer = null; //variável do timer 

    this.contar = this.contar.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  contar(){
    if(this.timer != null){         //função responsável por parar o cronometro e limpar os dados.
      clearInterval(this.timer);
      this.timer = null;

      this.setState({botaocomecar: 'Começar'});
    }else{
      this.timer = setInterval(() => this.setState({numero: this.state.numero + 0.1}) , 100);

      this.setState({botaocomecar: 'Parar'});
    }
  }

  zerar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero:0,
      botao: 'Começar',     
    })
  }


  render(){
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.cronometro} source={require('./assets/cronometro.png')} resizeMode='cover'>
          <Text style={styles.contador}>{this.state.numero.toFixed(1)}</Text> 
        </ImageBackground>

        <View style={styles.areabotoes}>
          <TouchableOpacity style={styles.botao} onPress={this.contar}>
            <Text style={styles.textodobotao}>{this.state.botaocomecar}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textodobotao} onPress={this.zerar}>Zerar</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.arearegistro}>
          <Text style={styles.registro}>{this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(1) + 's' : ''} </Text>
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

