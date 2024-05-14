import React, { Component, useState } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Alert, BackHandler} from 'react-native';
import Styles from './Styles'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { serviceLoginMethod } from '../../service/UserService';



export default function SignIn() {
    const navigation = useNavigation();
    const [ username , setUsername] = useState('')
    const [ password , setPassword] = useState('')
    const [alertErrorInput, setAlertErrorInput] = useState('');


const login = () => {
    if(username === "" || password === ""){
        setAlertErrorInput("Todos os campos devem ser preenchidos")
    }else{
        serviceLoginMethod( username , password )
        .then(function(result) {
            if(result){
                console.log('Entrou...')
                navigation.navigate('TravelList')

            }else{
                setAlertErrorInput('Erro no Login... Usuario ou Senha Incorretos')
            }
        })
        .catch(function(error) {
        });
    }
}
   

    return (
        <View style={Styles.container}>
            <Animatable.View style={Styles.containerHeader}>
                <Text style={Styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>
            <Animatable.View animation={'fadeInUp'} delay={300} style={Styles.containerForm} >
                <SafeAreaView style={Styles.safeArea}>
                    <TextInput 
                        style={Styles.item} 
                        placeholder='Email' 
                        keyboardType='email-address' 
                        onChangeText={(text) => setUsername(text)}
                    />

                    <TextInput 
                        style={Styles.item} 
                        placeholder='Senha' 
                        keyboardType='default'
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                    />

                    <Text style={Styles.alert}>{alertErrorInput}</Text>
                    <TouchableOpacity style={Styles.btnArea} onPress={login}>
                        <Text style={Styles.btnTexto}>ENTRAR</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </Animatable.View>
           
        </View>
    );
}


