import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Styles from './Style';
import Header from './../../components/Header';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { AddTravelMethod } from '../../service/TravelService'; 

const initialTravelData = {
    startDate: '',
    endDate: '',
    origin: '',
    destination: '',
    description: ''
};

const initialTravelDataISO = {
    startDate: '',
    endDate: '',
    origin: '',
    destination: '',
    description: ''
};

export default function AddTravel() {
    const currentDate = new Date();
    const navigation = useNavigation();
    const [travelData, setTravelData] = useState(initialTravelData);
    const [travelDataISO, setTravelDataISO] = useState(initialTravelDataISO);
    const [alertEmptyInput, setAlertEmptyInput] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDateField, setSelectedDateField] = useState('');
    const [startDate, setStartDate] = useState(null);

    const adicionarViagem = async () => {
        if (validateTravelData()) {
            setAlertEmptyInput('');
            const success = await AddTravelMethod(travelDataISO); 
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
        const { startDate, endDate, origin, destination, description } = travelData;
        if (
            startDate.trim() === '' ||
            endDate.trim() === '' ||
            origin.trim() === '' ||
            destination.trim() === '' ||
            description.trim() === ''
        ) {
            return false;
        }
        return true;
    }

    const handleDateConfirm = (date) => {
        const formattedDate = date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        const isoDate = date.toISOString().split('T')[0];
        setTravelData({ ...travelData, [selectedDateField]: formattedDate });
        setTravelDataISO({ ...travelDataISO, [selectedDateField]: isoDate });

        if (selectedDateField === 'startDate') {
            setStartDate(date);
        }

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
                        onPress={() => showDatePicker('startDate')}
                        style={Styles.date}
                    >
                        <Text>{travelData.startDate || "Data de Inicio"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => showDatePicker('endDate')}
                        style={Styles.date}
                    >
                        <Text>{travelData.endDate || "Data de Fim"}</Text>
                    </TouchableOpacity>
                    
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        minimumDate={selectedDateField === 'endDate' && startDate ? startDate : currentDate}
                        onConfirm={handleDateConfirm}
                        onCancel={hideDatePicker}
                    />
                </View>
                <TextInput
                    style={Styles.address}
                    placeholderTextColor={'gray'}
                    placeholder="Local de Origem"
                    value={travelData.origin}
                    onChangeText={text => {
                        setTravelData({ ...travelData, origin: text });
                        setTravelDataISO({ ...travelDataISO, origin: text });
                    }}
                />
                <TextInput
                    style={Styles.address}
                    placeholderTextColor={'gray'}
                    placeholder="Local de Destino"
                    value={travelData.destination}
                    onChangeText={text => {
                        setTravelData({ ...travelData, destination: text });
                        setTravelDataISO({ ...travelDataISO, destination: text });
                    }}
                />
                <TextInput
                    style={Styles.description}
                    placeholderTextColor={'gray'}
                    multiline={true}
                    placeholder="Descrição"
                    value={travelData.description}
                    onChangeText={text => {
                        setTravelData({ ...travelData, description: text });
                        setTravelDataISO({ ...travelDataISO, description: text });
                    }}
                />
                <Text style={Styles.alert}>{alertEmptyInput}</Text>
                <TouchableOpacity style={Styles.areaBottom} onPress={adicionarViagem}>
                    <Text style={Styles.textBottom}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
