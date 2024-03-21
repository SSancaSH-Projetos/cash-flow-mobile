import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export default function CardExpenses({ description, value, onRemove }) {
    const [detail, setDetail] = useState(false);
    const [fade, setFade] = useState('fadeInDown');

    function details(animationType) {
        if (!detail) {
            setFade(animationType);
            setDetail(true);
        } else {
            setFade(animationType);
            setTimeout(() => {
                setDetail(false);
            }, 500);
        }
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.shadow}>
                <View style={Styles.header}>
                    <Text style={Styles.titleCard}>{description}</Text>
                    <TouchableOpacity onPress={onRemove}>
                        <Icon name="trash" size={30} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={Styles.containerFooter}>
                    <View style={Styles.contentText}>
                        <Icon name="money" size={30} color="#000" />
                        <Text style={Styles.dateTravel}>{value}</Text>
                    </View>                   
                    <TouchableOpacity style={Styles.btn_description} onPress={() => details('fadeInDown')} >
                        <Text style={Styles.text_btn_description}>Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {detail && (
                <Animatable.View animation={fade} duration={500} style={Styles.containerDetail}>
                    <Text style={Styles.value}>R$ 98,80</Text>
                    <View style={Styles.infoContainer}>
                        <Text style={Styles.textDetail}>Categoria</Text>
                        <Text style={Styles.text}>Refeição</Text>
                    </View>
                    <View style={Styles.infoContainer}>
                        <Text style={Styles.textDetail}>Local do gasto</Text>
                        <Text style={Styles.text}>Restaurante Bela Vista</Text>
                    </View>
                    <View style={Styles.infoContainer}>
                        <Text style={Styles.textDetail}>Descrição</Text>
                        <Text style={Styles.text}>Almoço corporativo</Text>
                    </View>
                    <TouchableOpacity style={Styles.bottomDetail} onPress={() => details('fadeOutUp')}>
                        <Text style={Styles.bottomText}>Fechar</Text>
                    </TouchableOpacity>
                </Animatable.View>
            )}
        </SafeAreaView>
    );
}
