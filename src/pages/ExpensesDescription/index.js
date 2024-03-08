    import React, { useState, useEffect } from 'react';
    import { View , Text , TouchableOpacity, FlatList} from "react-native";
    import Styles from './Styles/';
    import { useNavigation , useRoute} from '@react-navigation/native';
    import Icon from 'react-native-vector-icons/FontAwesome';
    import Header from '../../components/Header';
    import CardExpenses from '../../components/CardExpenses';


    export default function TravelDescription() {
        const [dataTravel , setDataTravel] = useState([]);

        const navigation = useNavigation();
        const route = useRoute();

        const { origin, destination, description, initDate, finalDate } = route.params;
        
        useEffect(() => {
            const { dataTravel } = route.params || {};
            if (dataTravel) {
                setDataTravel(prevData => [...prevData, dataTravel]);
            }
        }, [route.params]);

        const addItemToList = () =>{
            navigation.navigate('AddExpenses');
        }

        const despesas = [
            {id: '1', description: 'Restaurante', valor: '98,90' },
            {id: '2', description: 'Dormitorio', valor: '198,90' },
            {id: '3', description: 'Combustivel', valor: '598,90' },
<<<<<<< HEAD
            {id: '4', description: 'Teste02', valor: '98,90' },
            {id: '5', description: 'Teste03', valor: '198,90' },
            {id: '6', description: 'Teste01', valor: '598,90' },
=======
            {id: '4', description: 'Combustivel', valor: '598,90' },
            {id: '5', description: 'Combustivel', valor: '598,90' },
            {id: '6', description: 'Combustivel', valor: '598,90' },
>>>>>>> 5d50adc3387d95ad64e33a25a7272a2c2bdc2084
        ]

        return(
            <View style={Styles.container}>
                <Header/>
                <View/>
            </View>
        )
    }