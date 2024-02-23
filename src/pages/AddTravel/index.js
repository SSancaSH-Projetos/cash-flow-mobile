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
            <View style={Styles.containerPage}>
            <Text style={Styles.title}>Marque Sua Viagem!</Text>
            <View style={Styles.inputDateDiv}>
                <TextInput
                    style={Styles.initiaDateInput}
                    placeholder="Data de Inicio"
                    value={travelData.initDate}
                    onChangeText={handleInitDateChange}
                    keyboardType="numeric"
                    maxLength={10}
                />
                <TextInput
                    style={Styles.finalDateInput}
                    placeholder="Data de Conclusão"
                    value={travelData.finalDate}
                    onChangeText={handleFinalDateChange}
                    keyboardType="numeric"
                    maxLength={10}
                />
            </View>
            <TextInput
                style={Styles.initialLocateInput}
                placeholder="Local de Origem"
                value={travelData.origin}
                onChangeText={text => setTravelData({ ...travelData, origin: text })}
            />
            <TextInput
                style={Styles.finalLocateInput}
                placeholder="Local de Destino"
                value={travelData.destination}
                onChangeText={text => setTravelData({ ...travelData, destination: text })}
            />
            <TextInput
                style={Styles.descriptionInput}
                placeholder="Descrição"
                value={travelData.description}
                onChangeText={text => setTravelData({ ...travelData, description: text })}
            />
            <Text style={Styles.alertEmptyInput}>{alertEmptyInput}</Text>
            <TouchableOpacity style={Styles.backgroundBtnAdd} onPress={adicionarViagem}>
                <Text style={Styles.textBtnAdd}>Adicionar</Text>
            </TouchableOpacity>
            </View>

            
        </View>
    );
}
