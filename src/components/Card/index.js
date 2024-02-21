import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Styles from './Styles'


export default function card() {
    return(
        <SafeAreaView style={Styles.container}>
            <View style={Styles.shadow}>
            <View style={Styles.header}>
                <Text style={Styles.titleCard}>Local Destino</Text>
                <Icon name="plus" size={30} color="#900" />
            </View>
            <View style={Styles.body}>
                <Text>Descrição da Viagem</Text>
            </View>
            <View style={Styles.footer}>
                <Image
                    source={require('../../img/logo.png')}
                    style={{width:30, height:30}}
                    ></Image>
                <Text style={Styles.dateTravel}>21/02/2024</Text>
                <Text style={Styles.description}>Descrição</Text>
            </View>
            </View>
        </SafeAreaView>
    )
}
