import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import Styles from './Styles';
import Card from './../../components/Card';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import { ListTravelMethod, RemoveTravelMethod } from '../../service/travelService';

export default function TravelList() {
    const [dataList, setDataList] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();

    //Metodo para Popular a Lista de Viagens
    useFocusEffect(useCallback(() => {
        (async() => {
            setDataList([...await ListTravelMethod()])
        })()
    }, []));

    const addItemToList = () => {
        navigation.navigate('AddTravel');
    }

    const removeCard = (id_card) => {
        console.log(id_card);
        const updatedList = dataList.filter(item => item.id !== id_card);
        setDataList(updatedList);
        RemoveTravelMethod(id_card);
    }
    

    return (
        <View style={Styles.container}>
            <Header/>
            <View style={Styles.containerTitle}>
                <Text style={Styles.title}>Viagens Marcadas</Text>
            </View>
                <View style={Styles.card}>
                    {dataList.length > 0 ? (
                        <FlatList
                            data={dataList}
                            renderItem={({ item, index }) => (
                                <Card
                                    destination={item.destination}
                                    origin={item.origin}
                                    description={item.description}
                                    initDate={item.initDate}
                                    finalDate={item.finalDate}
                                    onRemove={() => removeCard(item.id)}
                                />
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={{ paddingBottom: 250 }} 
                        />
                    ) : (
                        <View style={Styles.item}>
                            <Image source={require('../../img/travel-and-tourism.png')} />
                            <Text style={Styles.title}>Monte seu Plano de Viagens</Text>
                            <Text>Adicione viagens para poder gerencia-las</Text>
                        </View>
                    )}
                </View>
            <TouchableOpacity style={Styles.containerBottom} onPress={addItemToList}>
                <Icon name="plus" size={30} color="#000" />
            </TouchableOpacity>
        </View>
    );
}
