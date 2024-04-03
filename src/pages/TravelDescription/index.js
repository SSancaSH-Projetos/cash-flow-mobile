    import React, { useState, useCallback} from 'react';
    import { View , Text , TouchableOpacity, FlatList } from "react-native";
    import Styles from './Styles/';
    import { useFocusEffect , useNavigation , useRoute} from '@react-navigation/native';
    import Icon from 'react-native-vector-icons/FontAwesome';
    import Header from '../../components/Header';
    import CardExpenses from '../../components/CardExpenses';
    import { ListAllDescriptionMethod } from '../../service/TravelService';
    import { RemoveExpensesMethod , ListExpensesMethod } from '../../service/ExpensesService';

    const initialTravel = {
        id:'',
        startDate: '',
        endDate: '',
        origin: '',
        destination: '',
        description: '',
        expenses:[]
    };

    export default function TravelDescription() {
        const [travel , setTravel] = useState(initialTravel);
        const navigation = useNavigation();
        const route = useRoute();
        const { id } = route.params;

        async function getTravel() {
            const travel = await ListAllDescriptionMethod(id);
            travel && setTravel(travel);
            const expensesResponse = await ListExpensesMethod(id);
            setTravel({...travel, expenses : expensesResponse});
        }

        function navigateToAddExpensePage() {
            navigation.navigate('AddExpenses', { id });
        }

        async function removeExpenses(id_travel , id_card) {
            const updatedExpenses = travel.expenses.filter(item => item.id !== id_card);
            const removed = await RemoveExpensesMethod(id_travel, id_card);
            if (removed) {
                setTravel(prevState => ({
                    ...prevState,
                    expenses: updatedExpenses
                }));
                console.log("Despesa removida com sucesso");
            } else {
                console.log("Erro ao remover despesa");
            }
        }

        useFocusEffect(useCallback(() => { getTravel() }, []));

        return(
            <View style={Styles.container}>
                <Header/>

                <View style={Styles.titleContainer}>
                    <Text style={Styles.textDestino}>{travel.destination}</Text>
                    <Text style={Styles.textOrigem}>{travel.origin}</Text> 
                </View>

                <View style={Styles.date}>
                    <View style={Styles.dateItem}>
                        <Text style={Styles.dateTextItem}>Data Inicio</Text>
                        <Text style={Styles.dateText}>{travel.startDate}</Text>
                    </View>
                    <View style={Styles.dateItem}>
                        <Text style={Styles.dateTextItem}>Data Final</Text>
                        <Text style={Styles.dateText}>{travel.endDate}</Text>
                    </View>
                </View>

                <View style={Styles.descriptionContainer}>
                    <Text style={Styles.description}>DESCRIÇÃO</Text>
                    <Text style={Styles.descriptionText}>{travel.description}</Text>
                </View>

                <View style={Styles.containerCard}>
                    <View style={Styles.contentTitle}>
                        <Text style={Styles.titleText}>DESPESAS</Text>
                    </View>
                    <FlatList
                        data={travel.expenses}
                        renderItem={({item}) => {
                            return (
                              <CardExpenses
                              id={item.id}
                                id_travel={travel.id}
                                onRemove={() =>removeExpenses(travel.id , item.id)}
                              />
                            )

                        }}
                    />

                </View>
                
                <TouchableOpacity style={Styles.containerBottom} onPress={navigateToAddExpensePage}>
                    <Icon name="plus" size={30} color="#000" />
                </TouchableOpacity>
            </View>
        )
    }