import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import Styles from './Styles/'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/'
import { useNavigation } from '@react-navigation/native';


const inititExpensesData ={
    description: 'a',
    categoty:'a',
    value:'a',
    invoice:''
};

export default function AddExpenses() {
    const navigation = useNavigation();
    const [expensesData, setExpensesData] = useState(inititExpensesData);
    const [alertEmptyInput , setAlertEmptyInput] = useState('');


    const addExpenses = () => {
        if(true){
            setAlertEmptyInput('');
            const success = true;;
            if (success) {
                navigation.navigate('');
                console.log(expensesData);
            } else {
                setAlertEmptyInput('Erro ao adicionar a despesa');
            }
            
        }else{
            setAlertEmptyInput('Todos os campos devem ser preenchidos')
        }
    }
    

    const validateExpenses = () => {
        const {description , categoty ,value ,invoice} = expensesData; 
        if(
            description.trim() === '' ||
            categoty.trim() === '' ||
            value.trim() === ''
        ){
            return false;
        }
        return true;
    }



 return (
   <View style={Styles.container}>
        <Header/>
        <View Style={Styles.form}> 
            <TextInput
                style={Styles.input}
                placeholder='Descrição'
                onChangeText={text => setExpensesData({...expensesData,description: text })}
            />
            <TextInput
                style={Styles.input}
                placeholder='Categoria'
                onChangeText={text => setExpensesData({...expensesData,categoty: text })}

            />
            <TextInput
                style={Styles.input}
                placeholder='Valor'
                keyboardType='numeric'
                onChangeText={text => setExpensesData({...expensesData,value: text })}

            />
        </View>
        <TouchableOpacity style={Styles.areaButton} >
            <View style={Styles.button}>
                <Text style={Styles.textButton}>Anexar Nota Fiscal</Text>
                <Icon name="add-a-photo" size={30} color="#000" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.areaButtonAdd} onPress={addExpenses}>
            <View style={Styles.button}>
                <Text style={Styles.textButton}>ADICIONAR DESPESA</Text>
            </View>
        </TouchableOpacity>
   </View>
  );
}



