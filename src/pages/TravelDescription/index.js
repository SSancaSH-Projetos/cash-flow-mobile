    import React, { useState, useEffect  , useCallback} from 'react';
    import { View , Text , TouchableOpacity, FlatList  , ActivityIndicator} from "react-native";
    import Styles from './Styles/';
    import { useFocusEffect , useNavigation , useRoute} from '@react-navigation/native';
    import Icon from 'react-native-vector-icons/FontAwesome';
    import Header from '../../components/Header';
    import CardExpenses from '../../components/CardExpenses';
    import AddExpenses from '../AddExpenses/'
    import { ListExpensesMethod } from '../../service/ExpensesService';
    import { ListAllDescriptionMethod } from '../../service/TravelService';



    const initialTravelData = {
        id:'',
        initDate: '',
        finalDate: '',
        origin: '',
        destination: '',
        description: '',
        expenses:[]
    };

    export default function TravelDescription() {
        const [dataTravel , setDataTravel] = useState(initialTravelData);
        const [isLoading, setIsLoading] = useState(false);

        const navigation = useNavigation();
        const route = useRoute();

        const { id } = route.params;
        
        
        useFocusEffect(useCallback(() => {
            const fetchData = async () => {
                const travelData = await ListAllDescriptionMethod(id);
                if (travelData) {
                    setDataTravel(travelData);
                }
            };
            fetchData();
        }, [id]));
        

        const goToAddExpenses = () => {
            navigation.navigate('AddExpenses',{id});
        }

        return(
            <View style={Styles.container}>
                <Header/>
                <View style={Styles.titleContainer}>
                    <Text style={Styles.textDestino}>{dataTravel.destination}</Text>
                    <Text style={Styles.textOrigem}>{dataTravel.origin}</Text> 
                </View>

                <View style={Styles.date}>
                    <View style={Styles.dateItem}>
                        <Text style={Styles.dateTextItem}>Data Inicio</Text>
                        <Text style={Styles.dateText}>{dataTravel.initDate}</Text>
                    </View>
                    <View style={Styles.dateItem}>
                        <Text style={Styles.dateTextItem}>Data Final</Text>
                        <Text style={Styles.dateText}>{dataTravel.finalDate}</Text>
                    </View>
                </View>
                <View style={Styles.descriptionContainer}>
                    <Text style={Styles.description}>DESCRIÇÃO</Text>
                    <Text style={Styles.descriptionText}>{dataTravel.description}</Text>
                </View>
                <View style={Styles.containerCard}>
                    <View style={Styles.contentTitle}>
                        <Text style={Styles.titleText}>DESPESAS</Text>
                    </View>
                    <FlatList
                        data={dataTravel.expenses}
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