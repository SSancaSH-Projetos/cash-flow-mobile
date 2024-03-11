    import React, { useState, useEffect } from 'react';
    import { View , Text , TouchableOpacity, FlatList} from "react-native";
    import Styles from './Styles/';
    import { useNavigation , useRoute} from '@react-navigation/native';
    import Icon from 'react-native-vector-icons/FontAwesome';
    import Header from '../../components/Header';
    import CardExpenses from '../../components/CardExpenses';


    export default function ExpensesDescription() {
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

      
        return(
            <View style={Styles.container}>
                <Header/>
                <View/>
            </View>
        )
    }