import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import Styles from './Styles/';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header/';
import { useNavigation } from '@react-navigation/native';

const inititExpensesData = {
    description: 'a',
    category: 'a',
    value: 'a',
    invoice: null // Mudando para null para indicar que inicialmente não há imagem selecionada
};

// Componente ImageViewer com console.log adicionado
function ImageViewer({ placeholderImageSource, selectedImage }) {
    console.log('selectedImage:', selectedImage); // Verifica se selectedImage está sendo atualizado corretamente
    const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;
    return <Image source={imageSource} style={Styles.image} />;
}


export default function AddExpenses() {
    const navigation = useNavigation();
    const [expensesData, setExpensesData] = useState(inititExpensesData);
    const [alertEmptyInput, setAlertEmptyInput] = useState('');
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [camera, setCamera] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const PlaceholderImage = require('../../img/notaFiscal.png');
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync();
            setExpensesData({ ...expensesData, invoice: photo.uri });
        }
    };

    const pickImage = async (value) => {
        closeModal();
        let result;
        if (value) {
            result = await ImagePicker.launchImageLibraryAsync({
                quality: 1,
                allowsEditing: true,
                
            });
            if (!result.canceled) {
                setSelectedImage(result.assets[0].uri);
            }
        } else {
            result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                aspect: [4, 3],
                quality: 1,
                allowsEditing: true,
            });
            if (!result.canceled) {
                setSelectedImage(result.uri || (result.assets.length > 0 && result.assets[0].uri));
            }
        }
    };
    
    
    
    

    const addExpenses = () => {
        if (validateExpenses()) {
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
        const { description, category, value } = expensesData;
        return (
            description.trim() !== '' &&
            category.trim() !== '' &&
            value.trim() !== '' &&
            expensesData.invoice !== null
        );
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
                    onChangeText={text => setExpensesData({ ...expensesData, description: text })}
                />
                <TextInput
                    style={Styles.input}
                    placeholder='Categoria'
                    onChangeText={text => setExpensesData({ ...expensesData, category: text })}

                />
                <TextInput
                    style={Styles.input}
                    placeholder='Valor'
                    keyboardType='numeric'
                    onChangeText={text => setExpensesData({ ...expensesData, value: text })}

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

            <TouchableOpacity style={Styles.areaButtonAdd} onPress={addExpenses}>
                <View style={Styles.button}>
                    <Text style={Styles.textButton}>ADICIONAR DESPESA</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
