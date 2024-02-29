    import React, { useState, useEffect } from 'react';
    import { View , Text , TouchableOpacity} from "react-native";
    import Styles from './Styles';
    import { useNavigation , useRoute} from '@react-navigation/native';
    import Icon from 'react-native-vector-icons/FontAwesome';

    export default function TravelDescription() {
        const [dataTravel , setDataTravel] = useState([]);

        const navigation = useNavigation();
        const route = useRoute();


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
                <View style={Styles.shadow}>
                <View style={Styles.titleContainer}>
                    <Text>Destino</Text>
                    <Text>Origem</Text>
                </View>

                <View style={Styles.dateContainer}>
                    <Text>Data Inicio</Text>
                    <Text>Data Fim</Text>
                </View>

                <View style={Styles.descriptionContainer}>
                    <Text></Text>
                </View>

                <View style={Styles.expensesContainer}>

                </View>

                <TouchableOpacity style={Styles.containerBottom} onPress={addItemToList}>
                    <Icon name="plus" size={30} color="#000" />
                </TouchableOpacity>
                </View>
            </View>
        )
    }