import React from "react";
import { View, Image } from "react-native-animatable";
import Icon from 'react-native-vector-icons/Entypo';
import Styles from './Styles'

export default function header() {
    return(
        <View style={Styles.container}>
            {/*Trocar a cor da logo para as setar Brancas */}
            <Image 
                source={require('../../img/logo.png')}
                style={{width:50, height:50}}></Image>
            <Icon name="menu" size={30} color="#fff"/>
        </View>
    )
}