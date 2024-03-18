import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function CardExpenses({ description,value, onRemove }) {

    const navigator = useNavigation();

    const goToExpensesDescription = () => {
        navigator.navigate('ExpensesDesription');
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.shadow}>
                <View style={Styles.header}>
                    <Text style={Styles.titleCard}>{description}</Text>
                    <TouchableOpacity onPress={onRemove}>
                        <Icon name="trash" size={30} color="#000" />
                    </TouchableOpacity>
                </View>


                <View style={Styles.containerFooter}>
                    <View style={Styles.contentText}>
                        <Icon name="money" size={30} color="#000" />
                        <Text style={Styles.dateTravel}>{value}</Text>
                    </View>                   
                    <TouchableOpacity style={Styles.btn_description} onPress={goToExpensesDescription}>
                        <Text style={Styles.text_btn_description}>detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
