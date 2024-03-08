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

        const { id, origin, destination, description, initDate, finalDate } = route.params;
        
        useEffect(() => {
            const { dataTravel } = route.params || {};
            if (dataTravel) {
                setDataTravel(prevData => [...prevData, dataTravel]);
            }
            console.log("Descrição: "+id);
        }, [route.params]);

        const addItemToList = () =>{
            navigation.navigate('AddExpenses');
        }


        const despesas = [
            {id: '1', description: 'Restaurante', valor: '98,90' },
            {id: '2', description: 'Dormitorio', valor: '198,90' },
            {id: '3', description: 'Combustivel', valor: '598,90' },
        ]

        return(
            <View style={Styles.container}>
                <Header/>
                <View style={Styles.titleContainer}>
                    <Text style={Styles.textDestino}>{destination}</Text>
                    <Text style={Styles.textOrigem}>{origin}</Text> 
                </View>

                <View style={Styles.date}>
                    <View style={Styles.dateItem}>
                        <Text style={Styles.dateTextItem}>Data Inicio</Text>
                        <Text style={Styles.dateText}>{initDate}</Text>
                    </View>
                    <View style={Styles.dateItem}>
                        <Text style={Styles.dateTextItem}>Data Final</Text>
                        <Text style={Styles.dateText}>{finalDate}</Text>
                    </View>
                </View>
                <View style={Styles.descriptionContainer}>
                    <Text style={Styles.description}>DESCRIÇÃO</Text>
                    <Text style={Styles.descriptionText}>{description}</Text>
                </View>
                <View style={Styles.containerCard}>
                    <View style={Styles.contentTitle}>
                        <Text style={Styles.titleText}>DESPESAS</Text>
                    </View>
                    <FlatList
                        data={despesas}
                        renderItem={({item}) => {
                            return (
                              <CardExpenses
                              description={item.description}
                              value={item.valor}
                              />
                            )

                        }}
                    />

                </View>
                
                <TouchableOpacity style={Styles.containerBottom}>
                    <Icon name="plus" size={30} color="#000" />
                </TouchableOpacity>
            </View>
        )
    }