    import React, { useState, useEffect } from 'react';
    import { View , Text , TouchableOpacity, FlatList} from "react-native";
    import Styles from './Styles/';
    import { useFocusEffect , useNavigation , useRoute} from '@react-navigation/native';
    import Icon from 'react-native-vector-icons/FontAwesome';
    import Header from '../../components/Header';
    import CardExpenses from '../../components/CardExpenses';
    import AddExpenses from '../AddExpenses/'
    import { ListExpensesMethod } from '../../service/ExpensesService';


    export default function TravelDescription() {
        const [dataTravel , setDataTravel] = useState([]);
        const [dataExpenes , setDataExpenses] = useState([]);

        const navigation = useNavigation();
        const route = useRoute();

        const { id, origin, destination, description, initDate, finalDate } = route.params;
        
        useFocusEffect(useCallback(() => {
            (async() => {
                setDataExpenses([...await ListExpensesMethod(id)]);
            })();
        }, []));

        const goToAddExpenses = () =>{
            navigation.navigate('AddExpenses');
        }

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
                        data={dataExpenes}
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
                
                <TouchableOpacity style={Styles.containerBottom} onPress={goToAddExpenses}>
                    <Icon name="plus" size={30} color="#000" />
                </TouchableOpacity>
            </View>
        )
    }