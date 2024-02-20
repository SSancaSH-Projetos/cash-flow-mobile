import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

  const navigation = useNavigation();

 return (
   <View style={Styles.container}>
      <View style={Styles.containerLogo}>
        <Animatable.Image 
        delay={200}
        animation='flipInY'
        source={require('../../img/logo.png')}
        style={{width:200, height:200}}/>
      </View>
      <Animatable.View style={Styles.containerForm} animation='fadeInUp' delay={800}>
        <Text style={Styles.title}>Monitore e organize seus gastos corporativos! </Text>
        <Text style={Styles.text}>Faça Login para começar</Text>
        <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={Styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View >
   </View>
  );
}

