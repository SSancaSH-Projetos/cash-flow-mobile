import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import Styles from './Styles';
import Card from './../../components/Card';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';

export default function TravelList() {
    const [dataList, setDataList] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        const { travelData } = route.params || {};
        if (travelData) {
            setDataList(prevData => [...prevData, travelData]);
        }
    }, [route.params]);

    const addItemToList = () => {
        navigation.navigate('AddTravel');
    }

    const removeCard = (indexToRemove) => {
        setDataList(prevData => prevData.filter((_, index) => index !== indexToRemove));
    }

    return (
        <View style={Styles.container}>
            <Header/>
            <ScrollView style={Styles.scroll}>
                <View style={Styles.card}>
                    {dataList.length > 0 ? (
                        <FlatList
                            data={dataList}
                            renderItem={({ item, index }) => (
                                <Card
                                    destination={item.destination}
                                    description={item.description}
                                    initDate={item.initDate}
                                    finalDate={item.finalDate}
                                    onRemove={() => removeCard(index)}
                                />
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    ) : (
                        <View style={Styles.item}>
                            <Image source={require('../../img/travel-and-tourism.png')} />
                            <Text style={Styles.title}>Monte seu Plano de Viagens</Text>
                            <Text>Adicione viagens para poder gerencia-las</Text>
                        </View>
                    )}
                </View>
            </ScrollView>
            <TouchableOpacity style={Styles.containerBottom} onPress={addItemToList}>
                <Icon name="plus" size={30} color="#000" />
            </TouchableOpacity>
        </View>
    );
}