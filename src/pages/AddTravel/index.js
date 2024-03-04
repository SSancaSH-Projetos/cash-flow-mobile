import React, { useState } from 'react';
import { Button, TextInput, View, Text, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from './Style';
import Header from './../../components/Header';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { AddTravelMethod } from '../../service/travelService'; 

const initialTravelData = {
    initDate: '',
    finalDate: '',
    name: '',
    origin: '',
    destination: '',
    description: ''
};

export default function AddTravel() {
    const currentDate = new Date();
    const navigation = useNavigation();
    const [travelData, setTravelData] = useState(initialTravelData);
    const [alertEmptyInput, setAlertEmptyInput] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDateField, setSelectedDateField] = useState('');

    const adicionarViagem = () => {
        if (validateTravelData()) {
            setAlertEmptyInput('');
            console.log(travelData)
            const success = AddTravelMethod(travelData);
            console.log(success)
            if (success) {
                navigation.navigate('TravelList');
            } else {
                setAlertEmptyInput('Erro ao adicionar a viagem');
            }
        } else {
            setAlertEmptyInput('Todos os Campos devem ser Preenchidos');
        }
    }

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

    const handleDateConfirm = (date) => {
        const formattedDate = date.toLocaleDateString('pt-BR'); 
        setTravelData({ ...travelData, [selectedDateField]: formattedDate });
        hideDatePicker();
    };

    const showDatePicker = (field) => {
        setSelectedDateField(field);
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    return (
        <View style={Styles.container}>
            <Header />
            <View style={Styles.content}>
                <Text style={Styles.title}>Marque Sua Viagem!</Text>
                <View style={Styles.boxDate}>
                    <TouchableOpacity
                        onPress={() => showDatePicker('initDate')}
                        style={Styles.date}
                    >
                        <Text>{travelData.initDate || "Data de Inicio"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => showDatePicker('finalDate')}
                        style={Styles.date}
                    >
                        <Text>{travelData.finalDate || "Data de Fim"}</Text>
                    </TouchableOpacity>
                    
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        minimumDate={currentDate}
                        onConfirm={handleDateConfirm}
                        onCancel={hideDatePicker}
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
