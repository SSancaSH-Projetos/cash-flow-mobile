import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'
import Styles from './Styles/'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/'

export default function AddExpenses() {
 return (
   <View style={Styles.container}>
        <Header/>
        <View Style={Styles.form}> 
            <TextInput
                style={Styles.input}
                placeholder='Descrição'
            />
            <TextInput
                style={Styles.input}
                placeholder='Categoria'
            />
            <TextInput
                style={Styles.input}
                placeholder='Valor'
                keyboardType='numeric'
            />
        </View>
        <TouchableOpacity style={Styles.areaButton}>
            <View style={Styles.button}>
                <Text style={Styles.textButton}>Anexar Nota Fiscal</Text>
                <Icon name="add-a-photo" size={30} color="#000" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.areaButtonAdd}>
            <View style={Styles.button}>
                <Text style={Styles.textButton}>ADICIONAR DESPESA</Text>
            </View>
        </TouchableOpacity>
   </View>
  );
}

