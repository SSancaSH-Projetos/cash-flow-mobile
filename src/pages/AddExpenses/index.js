import React from 'react';
import { View, TouchableOpacity, Image, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles'; // Importa o arquivo de estilo

export default function AddExpenses() {
    return (
        <View style={styles.container}>
            {/* Barra azul com logo */}
            <View style={styles.header}>
                <Image source={require('../../img/logo.png')} style={styles.logo} />
                {/* Barra de menu com ícone */}
                <TouchableOpacity style={styles.menuIcon}>
                    <Icon name="bars" size={30} color="#fff" />
                </TouchableOpacity>
            </View>
            
            {/* Campos de entrada e botões */}
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Descrição" />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Categoria" />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Valor" />
                </View>
                <TouchableOpacity style={styles.photoButton}>
                    <Icon name="camera" size={20} color="#000" />
                    <Text style={styles.buttonText}>Tirar Foto da Nota Fiscal</Text>
                </TouchableOpacity>
                <View style={styles.centeredButtonContainer}>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={styles.buttonText}>Adicionar Despesa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
