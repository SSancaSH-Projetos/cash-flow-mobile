import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Card({ destination, description, date, onRemove }) {
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

                <View style={Styles.footer}>
                    <Icon name="calendar" size={30} color="#000" />
                    <Text style={Styles.dateTravel}>{date}</Text>
                    <TouchableOpacity style={Styles.btn_description} onPress={() => { }}>
                        <Text style={Styles.text_btn_description}>Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}