import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, Button , TouchableOpacity} from 'react-native';
import Styles from './Styles';
import Card from './../../components/Card';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TravelList() {

    const [dataList, setDataList] = useState([]);

    const navigation = useNavigation();

    // Método para adicionar um novo item à lista
    const addItemToList = () => {
        setData(prevData => [...prevData, <Card key={prevData.length + 1} />]);
    }

    return (
        <SafeAreaView style={Styles.cardContainer}>
            <View style={Styles.containerHeader}>
                <FlatList
                    data={dataList}
                    renderItem={({ item }) => item}
                    keyExtractor={(item, index) => index.toString()}
                />
                
            </View>
                    <TouchableOpacity style={Styles.btnAreaTextoSenha} onPress={() => navigation.navigate('AddTravel')}>
                        <Icon name="plus" size={30} color="#000" />
                    </TouchableOpacity> 
        </SafeAreaView>
    );
}
