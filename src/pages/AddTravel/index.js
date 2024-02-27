import React, { useState } from 'react';
import { Button, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from './Style';
import Header from './../../components/Header';

const initialTravelData = {
    initDate: '',
    finalDate: '',
    name: '',
    origin: '',
    destination: '',
    description: ''
};

export default function AddTravel() {
    
    const navigation = useNavigation();
    const [travelData, setTravelData] = useState(initialTravelData);
    const [alertEmptyInput, setAlertEmptyInput] = useState('');

    const adicionarViagem = () => {
        if (validateTravelData()) {
            setAlertEmptyInput('');
            navigation.navigate('TravelList', { travelData });
        } else {
            setAlertEmptyInput('Todos os Campos devem ser Preenchidos');
        }
    }

    const handleInitDateChange = (inputDate) => {
        const cleanedDate = inputDate.replace(/\D/g, '');
    
        let formattedDate = '';
        if (cleanedDate.length >= 1) {
          formattedDate += cleanedDate.substring(0, 2);
        }
        if (cleanedDate.length >= 3) {
          formattedDate += '/' + cleanedDate.substring(2, 4);
        }
        if (cleanedDate.length >= 5) {
          formattedDate += '/' + cleanedDate.substring(4, 8);
        }
    
        setTravelData({ ...travelData, initDate: formattedDate });
      };

      const handleFinalDateChange = (inputDate) => {
        const cleanedDate = inputDate.replace(/\D/g, '');
    
        let formattedDate = '';
        if (cleanedDate.length >= 1) {
          formattedDate += cleanedDate.substring(0, 2);
        }
        if (cleanedDate.length >= 3) {
          formattedDate += '/' + cleanedDate.substring(2, 4);
        }
        if (cleanedDate.length >= 5) {
          formattedDate += '/' + cleanedDate.substring(4, 8);
        }
    
        setTravelData({ ...travelData, finalDate: formattedDate });
    };
    
    const validateTravelData = () => {
        const { initDate, finalDate, origin, destination, description } = travelData;
        if (
            initDate.trim() === '' ||
            finalDate.trim() === '' ||
            origin.trim() === '' ||
            destination.trim() === '' ||
            description.trim() === ''
        ) {
            return false;
        }
        return true;
    }
    

    return (
            
        <View style={Styles.container}>
            <Header/>
            <View style={Styles.content}>
                <Text style={Styles.title}>Marque Sua Viagem!</Text>
                <View style={Styles.boxDate}>
                    <TextInput
                        placeholderTextColor={'gray'}
                        style={Styles.date}
                        keyboardType='numeric'
                        placeholder="Data de Inicio"
                        value={travelData.initDate}
                        onChangeText={handleInitDateChange}
                    />
                    <TextInput
                        placeholderTextColor={'gray'}
                        style={Styles.date}
                        keyboardType='numeric'
                        placeholder="Data de Fim"
                        value={travelData.finalDate}
                        onChangeText={handleFinalDateChange}
                    />
                </View>
                <TextInput
                    style={Styles.address}
                    placeholderTextColor={'gray'}
                    placeholder="Local de Origem"
                    value={travelData.origin}
                    onChangeText={text => setTravelData({ ...travelData, origin: text })}
                />
                <TextInput
                    style={Styles.address}
                    placeholderTextColor={'gray'}
                    placeholder="Local de Destino"
                    value={travelData.destination}
                    onChangeText={text => setTravelData({ ...travelData, destination: text })}
                />
                <TextInput
                    style={Styles.description}
                    placeholderTextColor={'gray'}
                    multiline={true}
                    placeholder="Descrição"
                    value={travelData.description}
                    onChangeText={text => setTravelData({ ...travelData, description: text })}
                />
                <Text style={Styles.alert}>{alertEmptyInput}</Text>
                <TouchableOpacity style={Styles.areaBottom} onPress={adicionarViagem}>
                    <Text style={Styles.textBottom}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>

            
        </View>
    );
}
