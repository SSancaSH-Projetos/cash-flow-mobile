import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Entypo';
import Styles from './Styles'
import { useNavigation } from "@react-navigation/native";


export default function header() {
    const navigation = useNavigation();
    return(
        <View style={Styles.container}>
            <TouchableOpacity
            onPress={()=> {navigation.navigate('TravelList')}}>
                <Image 
                    source={require('../../img/logo_branca.png')}
                    style={{width:54, height:49}}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                 <Icon name="menu" size={50} color="#fff"/>
            </TouchableOpacity>
        </View>
    )
}