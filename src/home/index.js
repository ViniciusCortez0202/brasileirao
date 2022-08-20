import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  const image = require('../../assets/logo-brasileirao.png');

 return (
   <View style={style.container}>
    <LinearGradient style={style.linearGradient} start={[0.4 , 1.5]} end={[0, 0]} colors={['#008000', 'transparent']}/>
    <Image source={image} resizeMode='center' style={{width: 400, height: 400}}/>
    <TouchableOpacity activeOpacity={0.8} style={style.button}>
      <Text style={style.textButton}>Rodada atual</Text>
    </TouchableOpacity>

   </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  linearGradient:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  },
  button:{
    width: '50%',
    height: 65,
    backgroundColor: '#ffff00',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  textButton:{
    color: '#808080',
    fontSize: 20
  }
});