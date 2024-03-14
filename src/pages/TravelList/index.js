import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image , ActivityIndicator} from 'react-native';
import Styles from './Styles';
import Card from './../../components/Card';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import { ListTravelMethod, RemoveTravelMethod } from '../../service/TravelService';

export default function TravelList() {
const [dataList, setDataList] = useState([]);
const [ isLoading , setIsLoading] = useState(false);
const navigation = useNavigation();
const route = useRoute();

//Metodo para Popular a Lista de Viagens
useFocusEffect(useCallback(() => {
(async() => {
    setIsLoading(true);
    setDataList([...await ListTravelMethod()]);
    setIsLoading(false);
})();
}, []));

const addItemToList = () => {
navigation.navigate('AddTravel');
}

const removeCard = (id_card) => {
const updatedList = dataList.filter(item => item.id !== id_card);
setDataList(updatedList);
RemoveTravelMethod(id_card);
}


return (
<View style={Styles.container}>
    <Header/>
    {isLoading ? (
        <View style={Styles.loadingContainer}>
            <ActivityIndicator size="large" color="#000" />
        </View>
    ) : (
        <View style={Styles.main}>
            
            <View style={Styles.card}>
            
                {dataList.length > 0 ? (
                    <View>
                        <View style={Styles.containerTitle}>
                            <Text style={Styles.title}>Viagens Marcadas</Text>
                        </View>
                        <FlatList
                        data={dataList}
                        renderItem={({ item, index }) => (
                            <Card
                                id={item.id}
                                destination={item.destination}
                                description={item.description}
                                initDate={item.initDate}
                                onRemove={() => removeCard(item.id)}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={{ paddingBottom: 250 }} 
                    />
                    </View>
                ) : (
                    <View style={Styles.item}>
                        <Image source={require('../../img/travel-and-tourism.png')} />
                        <Text style={Styles.title}>Monte seu Plano de Viagens</Text>
                        <Text>Adicione viagens para poder gerenciá-las</Text>
                    </View>
                )}
            </View>
            <TouchableOpacity style={Styles.containerBottom} onPress={addItemToList}>
                <Icon name="plus" size={30} color="#000" />
            </TouchableOpacity>
        </View>
    )}
</View>
);

}
