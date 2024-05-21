    import React, {useEffect } from 'react';
    import { View } from "react-native";
    import Styles from './Styles/';
    import {useRoute} from '@react-navigation/native';
    import Header from '../../components/Header';



    export default function TravelDescription() {
        const route = useRoute();

        useEffect(() => {
            const { dataTravel } = route.params || {};
            if (dataTravel) {
                setDataTravel(prevData => [...prevData, dataTravel]);
            }
        }, [route.params]);

 

        return(
            <View style={Styles.container}>
                <Header/>
                <View/>
            </View>
        )
    }