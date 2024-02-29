import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ExpenseCard({ description, value, onRemove}) {

    const Expenses ={
        description : description,
        value : value,
    }

    const goToExpenseDetails = () => {
        /*Abre o PopUp de descrição da despesa*/
    }

     
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.shadow}>
            <View>
                <Text>{description}</Text>
                    <TouchableOpacity onPress={onRemove}>
                        <Icon name="trash" size={30} color="#000" />
                    </TouchableOpacity>
            </View>
            <View>
                <Icon name='money' size={40} color="#000"></Icon>
                <Text>{value}</Text>
                <TouchableOpacity onPress={goToExpenseDetails}>
                    <Text>Detalhes</Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    )
}
