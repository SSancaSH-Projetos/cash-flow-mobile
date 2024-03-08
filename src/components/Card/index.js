import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Card({ id , origin, destination,  description, initDate,finalDate, onRemove }) {

    const navigator = useNavigation();

    const goToTravelDescription = () => {
        navigator.navigate('TravelDescription', {id, origin, destination, description, initDate, finalDate });
        console.log(id);
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.shadow}>
                <View style={Styles.header}>
                    <Text style={Styles.titleCard}>{destination}</Text>
                    <TouchableOpacity onPress={onRemove}>
                        <Icon name="trash" size={30} color="#000" />
                    </TouchableOpacity>
                </View>

                <View style={Styles.body}>
                    <Text>{description}</Text>
                </View>

                <View style={Styles.containerFooter}>
                    <View style={Styles.contentText}>
                        <Icon name="calendar" size={30} color="#000" />
                        <Text style={Styles.dateTravel}>{initDate}</Text>
                    </View>                   
                    <TouchableOpacity style={Styles.btn_description} onPress={goToTravelDescription}>
                        <Text style={Styles.text_btn_description}>Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
