import React from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './Styles'
import { useNavigation } from "@react-navigation/native";
import { serviceLogoutMethod } from "../../service/UserService";


export default function Header() {
    const navigation = useNavigation();

    async function exit(){
        const response = await serviceLogoutMethod();
        if(response){
            navigation.navigate('Welcome');
        }
    }

    function confirmLogout() {
        Alert.alert(
            'Sair',
            'Ao sair a sessão será finalizada.',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Confirmar',
                    onPress:  () => exit,
                },
            ],
            { cancelable: false }
        );
    }

    return(
        <View style={Styles.container}>
            <TouchableOpacity onPress={()=> {navigation.navigate('TravelList')}}>
                <Image 
                    source={require('../../img/logo_branca.png')}
                    style={{width:54, height:49}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={confirmLogout}>
                 <Icon name="logout" size={35} color="#fff"/>
            </TouchableOpacity>
        </View>
    );
}
