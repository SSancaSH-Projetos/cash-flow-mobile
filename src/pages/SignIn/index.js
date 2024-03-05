import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Alert} from 'react-native';
import Styles from './Styles'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { login } from '../../service/userService';


const InitUser = () => {
    username = '',
    password = ''
}; 


export default function SignIn() {
    const navigation = useNavigation();
    const [ user , setUser ] = useState(InitUser);
    const [alertErrorInput, setAlertErrorInput] = useState('');


const makeLogin = () => {
    login(user.username, user.password)
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
                        onChangeText={text => setUser({...user , username : text })}
                    />

                    <TextInput 
                        style={Styles.item} 
                        placeholder='Senha' 
                        keyboardType='numeric'
                        onChangeText={text => setUser({...user , password : text })}
                    />

                    <Text style={Styles.alert}>{alertErrorInput}</Text>
                    <TouchableOpacity style={Styles.btnArea} onPress={makeLogin}>
                        <Text style={Styles.btnTexto}>ENTRAR</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </Animatable.View>
           
        </View>
    );
}


