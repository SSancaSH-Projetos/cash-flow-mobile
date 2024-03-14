import { View, Text, TextInput, TouchableOpacity , Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import Styles from './Styles/';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/';
import { useNavigation } from '@react-navigation/native';

const inititExpensesData ={
    description: 'a',
    category:'a',
    value:'a',
    invoice: null // Mudando para null para indicar que inicialmente não há imagem selecionada
};



function ImageViewer({ placeholderImageSource, selectedImage }) {
    const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;
    return <Image source={imageSource} style={Styles.image} />;
  }
  

export default function AddExpenses() {
    const navigation = useNavigation();
    const [expensesData, setExpensesData] = useState(inititExpensesData);
    const [alertEmptyInput , setAlertEmptyInput] = useState('');
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [camera, setCamera] = useState(null);
    const [selectedImage , setSelectedImage] = useState(null);
    const PlaceholderImage = require('../../img/notaFiscal.png');


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync();
            setExpensesData({...expensesData, invoice: photo.uri});
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        setSelectedImage(result.assets[0].uri);
        
        
        // if (result && result.uri) {
            
            
        // } else {
        //     console.log('No image selected or URI is undefined.');
        // }
    };

    const addExpenses = () => {
        if(validateExpenses()){
            setAlertEmptyInput('');
            const success = true;
            if (success) {
                console.log(selectedImage);
            } else {
                setAlertEmptyInput('Erro ao adicionar a despesa');
            }
        } else {
            setAlertEmptyInput('Todos os campos devem ser preenchidos');
        }
    };

    const validateExpenses = () => {
        const {description, category, value} = expensesData; 
        return (
            description.trim() !== '' &&
            category.trim() !== '' &&
            value.trim() !== '' &&
            expensesData.invoice !== null // Garantindo que uma imagem foi selecionada
        );
    };

    return (
        <View style={Styles.container}>
            <Header/>
            <View Style={Styles.form}> 
                <TextInput
                    style={Styles.input}
                    placeholder='Descrição'
                    onChangeText={text => setExpensesData({...expensesData, description: text })}
                />
                <TextInput
                    style={Styles.input}
                    placeholder='Categoria'
                    onChangeText={text => setExpensesData({...expensesData, category: text })}

                />
                <TextInput
                    style={Styles.input}
                    placeholder='Valor'
                    keyboardType='numeric'
                    onChangeText={text => setExpensesData({...expensesData, value: text })}

                />
            </View>
            
            <TouchableOpacity style={Styles.areaButton} onPress={async() => pickImage()}>
                <View style={Styles.button}>
                    <Text style={Styles.textButton}>Anexar Nota Fiscal</Text>
                    <Icon name="add-a-photo" size={30} color="#000" />
                </View>
            </TouchableOpacity>

            <View style={Styles.imageContainer}>
            <ImageViewer
                placeholderImageSource={PlaceholderImage}
                selectedImage={selectedImage}
            />
            </View>

            <TouchableOpacity style={Styles.areaButtonAdd} onPress={addExpenses}>
                <View style={Styles.button}>
                    <Text style={Styles.textButton}>ADICIONAR DESPESA</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
