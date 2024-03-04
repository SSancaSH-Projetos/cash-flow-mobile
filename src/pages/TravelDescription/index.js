    import React, { useState, useEffect } from 'react';
    import { View , Text , TouchableOpacity} from "react-native";
    import Styles from './Styles/';
    import { useNavigation , useRoute} from '@react-navigation/native';
    import Icon from 'react-native-vector-icons/FontAwesome';
    import Header from '../../components/Header';


    export default function TravelDescription() {
        const [dataTravel , setDataTravel] = useState([]);

        const navigation = useNavigation();
        const route = useRoute();

        const viagem = {
            viajem:"Viagem a negócio",
            destino: 'São Paulo',
            origem: 'São Carlos',
            dataInicio: '10/12/2023',
            dataFinal: '10/03/2024',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
        }
        
        useEffect(() => {
            const { dataTravel } = route.params || {};
            if (dataTravel) {
                setDataTravel(prevData => [...prevData, dataTravel]);
            }
        }, [route.params]);

        const addItemToList = () =>{
            navigation.navigate('AddExpenses')
        }

        return(
            <View style={Styles.container}>
                <Header/>
                <View style={Styles.titleContainer}>
                    <Text style={Styles.textOrigem}>{viagem.origem}</Text>
                    <Text style={Styles.textDestino}>{viagem.destino}</Text>
                </View>

                <View style={Styles.date}>
                    <View style={Styles.dateInicio}>
                        <Text style={Styles.dateInicioText}>Data Inicio</Text>
                        <Text style={Styles.dateText}>{viagem.dataInicio}</Text>
                    </View>
                    <View style={Styles.dateFinal}>
                        <Text style={Styles.dateFinalText}>Data Final</Text>
                        <Text style={Styles.dateText}>{viagem.dataFinal}</Text>
                    </View>
                </View>
                <View style={Styles.descriptionContainer}>
                    <Text style={Styles.description}>Descrição</Text>
                    <Text style={Styles.descriptionText}>{viagem.description}</Text>
                </View>
                
                <TouchableOpacity style={Styles.containerBottom} onPress={addItemToList}>
                    <Icon name="plus" size={30} color="#000" />
                </TouchableOpacity>
            </View>
        )
    }