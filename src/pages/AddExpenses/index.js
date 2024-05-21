import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import Styles from './Styles/';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/';
import { useFocusEffect, useNavigation , useRoute} from '@react-navigation/native';
import { AddExpensesMethod } from '../../service/ExpensesService';

const inititialExpense = {
description: '',
category: '',
amount: '',
invoice: null,
id_travel:'' 
};

function ImageViewer({ placeholderImageSource, selectedImage }) {
const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;
return <Image source={imageSource} style={Styles.image} />;
}

export default function AddExpenses() {
const [expense, setExpense] = useState(inititialExpense);
const [selectedImage, setSelectedImage] = useState(null);
const navigation = useNavigation();
const PlaceholderImage = require('../../img/notaFiscal.png');
const [visible, setVisible] = useState(false);
const route = useRoute();
const { id } = route.params;

async function requestCameraPermission() {
    await Camera.requestCameraPermissionsAsync();
    setExpense(({ ...expense, id_travel: id })); 
}

useFocusEffect(useCallback(() => { requestCameraPermission() }, []));

const pickImage = async (amount) => {
    closeModal();
    let result;
    if (amount) {
        result = await ImagePicker.launchImageLibraryAsync({
            quality: 1,
            allowsEditing: true,
        });
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setExpense({ ...expense, invoice: result.assets[0] }); 
        }
    } else {
        result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setExpense({ ...expense, invoice: result.assets[0] }); 
            console.log(result);
        }
    }
};

function addExpense() {
    if (!validateExpenses()) {
        //setAlertEmptyInput('Todos os campos devem ser preenchidos');
    }
    //setAlertEmptyInput('');
    const success = AddExpensesMethod(expense);
    if (!success) {
        //setAlertEmptyInput('Erro ao adicionar a despesa');
    }
    setSelectedImage(null);
    navigation.navigate('TravelDescription', { id });
}


const validateExpenses = () => {
    const { description, category, amount, invoice } = expense;
    console.log(expense)
    if(
        description.trim() !== '' &&
        category.trim() !== '' &&
        amount.trim() !== '' &&
        invoice !== null 
    ){
        return true;
    }else{
        return false;
    }
};


function openModal() {
    setVisible(true);
}

function closeModal() {
    setVisible(false);
}

return (
    <View style={Styles.container}>
        <Header />
        <View style={Styles.form}>
            <TextInput
                style={Styles.input}
                placeholder='Descrição'
                onChangeText={text => setExpense({ ...expense, description: text })}
            />
            <TextInput
                style={Styles.input}
                placeholder='Categoria'
                onChangeText={text => setExpense({ ...expense, category: text })}

            />
            <TextInput
                style={Styles.input}
                placeholder='Valor'
                keyboardType='numeric'
                onChangeText={text => setExpense({ ...expense, amount: text })}

            />
        </View>

        <TouchableOpacity style={Styles.areaButton} onPress={openModal} >

            <View style={Styles.button}>
                <Text style={Styles.textButton}>Anexar Nota Fiscal</Text>
                <Icon name="add-a-photo" size={30} color="#000" />
            </View>
        </TouchableOpacity>

        <Modal animationType='fade' visible={visible} style={Styles.areaModal} onRequestClose={closeModal}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={Styles.modalContainer}>
                    <View style={Styles.buttonsContainerModal}>
                        <TouchableOpacity style={Styles.buttonModal} onPress={() => pickImage(false)}>
                            <Text style={Styles.buttonTextModal}>Selecionar Câmera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.buttonModal} onPress={() => pickImage(true)}>
                            <Text style={Styles.buttonTextModal}>Selecionar Arquivo</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={Styles.buttonModalCan} onPress={closeModal}>
                        <Text style={Styles.buttonTextModal}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </Modal>

        <View style={Styles.imageContainer}>
            <ImageViewer
                placeholderImageSource={PlaceholderImage}
                selectedImage={selectedImage}
            />
        </View>

        <TouchableOpacity style={Styles.areaButtonAdd} onPress={() => addExpense()}>
            <View style={Styles.button}>
                <Text style={Styles.textButton}>ADICIONAR DESPESA</Text>
            </View>
        </TouchableOpacity>
    </View>
);
}
