import React from "react";
import { View } from "react-native-animatable";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function header() {
    return(
        <View>
            <Icon name="rocket" size={30} color="#900" />
            <Icon name="rocket" size={30} color="#900" />
        </View>
    )
}