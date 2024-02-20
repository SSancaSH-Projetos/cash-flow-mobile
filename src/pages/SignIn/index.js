import React from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Styles from './Styles'
import * as Animatable from 'react-native-animatable';

export default function SignIn() {
    return (
        <View style={Styles.container}>
            <Animatable.View style={Styles.containerHeader}>
                <Text style={Styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>
            <Animatable.View animation={'fadeInUp'} delay={300} style={Styles.containerForm} >
                <SafeAreaView style={Styles.safeArea}>
                    <TextInput style={Styles.item} placeholder='Email' keyboardType='email-address'/>
                    <TextInput style={Styles.item} placeholder='Senha' keyboardType='numeric'/>
                    <TouchableOpacity style={Styles.btnArea}>
                        <Text style={Styles.btnTexto}>ENTRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.btnAreaTextoSenha}>
                        <Text style={Styles.btnTextoSenha}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </Animatable.View>
           
        </View>
    );
}


