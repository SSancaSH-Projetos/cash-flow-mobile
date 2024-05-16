import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Styles from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { GeneratePdf } from '../../service/TravelService';

export default function Card({ id, destination, description, initDate, onRemove }) {

    const navigator = useNavigation();

    const goToTravelDescription = () => {
        navigator.navigate('TravelDescription', { id });
    }

    async function gerarPDF() {
        try {
            const pdfBlob = await GeneratePdf(id);

            const base64 = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(pdfBlob);
                reader.onloadend = () => {
                    const base64data = reader.result.split(',')[1];
                    resolve(base64data);
                };
                reader.onerror = reject;
            });

            const pdfUri = `${FileSystem.documentDirectory}${destination}.pdf`;
            await FileSystem.writeAsStringAsync(pdfUri, base64, {
                encoding: FileSystem.EncodingType.Base64,
            });

            Alert.alert(
                'PDF Gerado',
                'O PDF foi salvo no seu dispositivo. Deseja compartilhar agora?',
                [
                    {
                        text: 'Não',
                        style: 'cancel',
                    },
                    {
                        text: 'Sim',
                        onPress: async () => {
                            if (await Sharing.isAvailableAsync()) {
                                await Sharing.shareAsync(pdfUri);
                            } else {
                                Alert.alert('Compartilhamento não disponível', 'O compartilhamento não está disponível neste dispositivo.');
                            }
                        },
                    },
                ]
            );
        } catch (error) {
            console.error('Error in gerarPDF:', error);
            Alert.alert('Erro', 'Falha ao gerar e salvar o PDF.');
        }
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.shadow}>
                <View style={Styles.header}>
                    <Text style={Styles.titleCard}>{destination}</Text>
                    <TouchableOpacity onPress={onRemove}>
                        <Icon name="trash" size={30} color="#000" />
                    </TouchableOpacity>
                </View>

                <View style={Styles.body}>
                    <Text>{description}</Text>
                </View>

                <View style={Styles.containerFooter}>
                    <View style={Styles.contentText}>
                        <TouchableOpacity onPress={gerarPDF}>
                            <Icon name="file-pdf-o" size={30} color="#000" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={Styles.btn_description} onPress={goToTravelDescription}>
                        <Text style={Styles.text_btn_description}>Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
